const SES = require("aws-sdk").SES;
const admin = require("firebase-admin");

const init = () => {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.project_id,
      privateKey: process.env.private_key
        ? process.env.private_key.replace(/\\n/g, "\n")
        : "",
      clientEmail: process.env.client_email,
    }),
    databaseURL: process.env.databaseURL,
  });
};

const validateUser = async (token, uid) => {
  const verify = await admin.auth().verifyIdToken(token);
  return new Promise((resolve) => {
    if (verify.uid) {
      resolve(verify.uid === uid);
    } else {
      resolve(false);
    }
  });
};

exports.handler = async (event) => {
  let body = event.body;

  try {
    body = JSON.parse(event.body);
  } catch {
    console.error("error parsing body");
  }
  const { message, slug, userid, displayname, token, avatar } = body;
  const dt = new Date();
  const id = dt.valueOf().toString();
  if (!admin.apps.length) {
    init();
  }

  const db = admin.firestore();
  const document = await db.collection("comments").doc(slug).get();

  if (!document.data()) {
    await db.collection("comments").doc(slug).create({});
  }

  const ref = db
    .collection("comments")
    .doc(slug)
    .collection("comments")
    .doc(id);

  const postToDb = () => {
    return new Promise((resolve) => {
      ref
        .set({
          message: message,
          userid: userid,
          timestamp: new admin.firestore.Timestamp(
            Math.floor(dt.valueOf() / 1000),
            dt.getMilliseconds()
          ),
          displayname: displayname,
          status: "pending",
          avatar: avatar ? avatar : "",
        })
        .catch((err) => {
          resolve({ status: "501", resp: err });
        })
        .then(() => {
          resolve({ status: "200", resp: "success" });
        });
    });
  };

  const sendEmail = () => {
    return new Promise(async (resolve) => {
      const ses = new SES({
        accessKeyId: process.env.aws_accessKey,
        secretAccessKey: process.env.aws_secretKey,
        region: process.env.aws_region,
      });

      const params = {
        Destination: {
          ToAddresses: [process.env.to_email],
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: `<html>
                  <body>
                    <h1>DylanAllen.net - New Post</h1>
                    <p>Name ${displayname}</p>
                    ${
                      avatar
                        ? `<img src="${avatar}" style="max-height: 200px; width: auto;"/>`
                        : ""
                    }
                    <p>${message}</p>
                    <p>
                      <a href="https://www.dylanallen.net/admin">Approve or delete this comment</a>
                    </p>
                  </body>
                </html>`,
            },
            Text: {
              Charset: "UTF-8",
              Data: `Comment from ${displayname}: ${message}`,
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: "Comment on DylanAllen.net",
          },
        },
        Source: process.env.from_email,
      };
      await ses.sendEmail(params).promise();
      resolve(true);
    });
  };

  if (await validateUser(token, userid)) {
    return new Promise(async (resolve) => {
      const post = postToDb();
      await post;
      const email = await sendEmail();
      await email;
      if ((await post).status === "200") {
        resolve({
          statusCode: 200,
          body: JSON.stringify({ message: "Post submitted" }),
        });
      } else {
        resolve({
          statusCode: 501,
          body: JSON.stringify({
            message: "Post failed due to error",
            err: (await post).resp,
          }),
        });
      }
    });
  } else {
    return {
      statusCode: 402,
      body: JSON.stringify({ message: "User not authorized" }),
    };
  }
};
