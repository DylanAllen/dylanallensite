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

const validateUser = async (
  token,
  ref
) => {
  const verify = await admin.auth().verifyIdToken(token);
  return new Promise((resolve) => {
    if (verify.uid) {
      ref.get().then((doc) => {
        let data = doc.data();
        if (data.userid === verify.uid) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    } else {
      resolve(false);
    }
  });
};

exports.handler = async (event) => {
  console.log(event.body);
  let body = event.body;

  try {
    body = JSON.parse(event.body);
  } catch {
    console.error("error parsing body");
  }

  const { slug, postid, token } = body;
  if (!admin.apps.length) {
    init();
  }

  const db = admin.firestore();
  const ref = db
    .collection("comments")
    .doc(slug)
    .collection("comments")
    .doc(postid);

  if (await validateUser(token, ref)) {
    return new Promise((resolve) => {
      ref
        .delete()
        .catch((err) => {
          resolve({
            statusCode: 501,
            body: JSON.stringify({
              message: "Delete failed due to error",
              err: err,
            }),
          });
        })
        .then(() => {
          resolve({
            statusCode: 200,
            body: JSON.stringify({ message: "Post deleted" }),
          });
        });
    });
  } else {
    return {
      statusCode: 402,
      body: JSON.stringify({ message: "User not authorized" }),
    };
  }
};
