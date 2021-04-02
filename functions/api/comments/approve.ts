import { NextApiRequest, NextApiResponse } from 'next'
import * as admin from 'firebase-admin';

const init = () => {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.project_id,
      privateKey:  (process.env.private_key) ? process.env.private_key.replace(/\\n/g, '\n') : '',
      clientEmail: process.env.client_email
    }),
    databaseURL: process.env.databaseURL
  });
}

interface CommentType {
  userid: string;
  message: string;
  displayname: string;
  status: 'approved' | 'pending' | 'rejected';
  timestamp: FirebaseFirestore.Timestamp;
  id: string;
}

const validateUser = async (token: string, ref: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>) => {
  const verify = await admin.auth().verifyIdToken(token)
  return new Promise((resolve) => {
    if (verify.uid) {
      ref.get().then(doc => {
        let data = doc.data() as CommentType;
        if (data.userid = verify.uid) {
          resolve(true)
        } else {
          resolve(false);
        }
      })
    } else {
      resolve(false);
    }
  })
  
}

  
export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);
  const { slug, postid, token } = req.body;
  if (!admin.apps.length) {
    init()
  }

  console.log('gettting db');
  const db = admin.firestore();
  const ref = db.collection('comments')
    .doc(slug)
    .collection('comments')
    .doc(postid)

  if (await validateUser(token, ref)) {

    return new Promise(resolve => {
      ref
        .update({
          status: 'approved'
        }).catch(err => {
          res.status(501).json({ message: "Approval failed due to error", err: err})
          resolve(null);
        }).then(() => {
          res.status(200).json({ message: "Post approved" })
          resolve(null);
        })
    })

  } else {

    res.status(402).json({ message: "User not authorized"})
    return Promise.resolve()
    
  }

}