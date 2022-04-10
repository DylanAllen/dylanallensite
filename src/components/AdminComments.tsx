import React, { useContext, useState, useEffect } from "react";

import { Trash, CheckboxSelected } from 'grommet-icons';
import { Heading, Markdown } from 'grommet';
import "firebase/compat/firestore"
import { Link } from "react-router-dom";
import { Context } from "../App";
import { apiPost } from "../utils/api";
import { collection, getDocs, getFirestore, Timestamp } from "firebase/firestore";

interface CommentType {
  userid: string;
  message: string;
  displayname: string;
  status: 'approved' | 'pending' | 'rejected';
  timestamp: Timestamp;
  id: string;
  slug: string
}

const AdminComments: React.FunctionComponent = () => {
  
  const state = useContext(Context)
  const [comments, updateComments] = useState<CommentType[]>([]);
  const [trigger, update] = useState(0);
  const [db] = useState(getFirestore())
  const commentsRef = collection(db, 'comments');

  const Comment: React.FunctionComponent<{ comment: CommentType }> = ({ comment }) => (
    <div className="commentContainer">
      <Trash color="#453762" className="deleteComment" onClick={() => {deleteComment(comment.slug, comment.id )}} />
      { (comment.status !== 'approved') && <CheckboxSelected color="#453762" className="approveComment" onClick={() => {approveComment(comment.slug,comment.id)}} />}
      <div className="comment">
        <div className="username">{comment.displayname}</div>
        <div className="timestamp">{comment.timestamp.toDate().toLocaleDateString()} {comment.timestamp.toDate().toLocaleTimeString()}</div>
        <div className="message"><div className="messagespan"><Markdown>{comment.message}</Markdown></div></div>
        <div className="slug"><Link to={`/blog/${comment.slug}`}>{comment.slug}</Link></div>
        <div className="status">{comment.status}</div>
      </div>
    </div>
  )

  const getComments = async () => {

    let allComments: CommentType[] = [];
    const posts = await getDocs(commentsRef)

    const commentsPromise = posts.docs.map(async (post) => {
      let slug = post.id;
      return new Promise(async (resolve) => {
        
        const posts = (await getDocs(collection(db, 'comments', post.id, 'comments')))
        posts.forEach((doc) => {
          allComments.push({...doc.data(), slug: slug, id: doc.id} as CommentType);
        })
        resolve(allComments)
      })
    })

    await Promise.all(commentsPromise);

    updateComments(allComments);

    return allComments;
  }

  useEffect(() => {
    getComments();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[trigger])

  const approveComment = async (slug: string, id: string) => {
    if (state.user) {
      const payload = {
        slug: slug,
        postid: id,
        token: await state.user.getIdToken()
      }

      const post = await apiPost(payload, '/approve');
      const res = await post.json()
      if (post.status === 200) {
        state.toast('Comment approved.');
        update(trigger + 1);
      } else {
        alert(res.message);
        state.toast(res.message);
      } 
    } else {
      alert('User not found');
    }  
  }

  const deleteComment = async (slug: string, id: string) => {
    if (state.user) {
      const payload = {
        slug: slug,
        postid: id,
        token: await state.user.getIdToken()
      }

      const post = await apiPost(payload, '/delete');
      const res = await post.json()
      if (post.status === 200) {
        state.toast('Comment deleted.');
        update(trigger + 1);
      } else {
        alert(res.message);
        state.toast(res.message,'error');
      } 
    } else {
      alert('User not found');
    }  
  }
   
  return (
    <div className="commentsContainer">
      <Heading level={2}>Comments</Heading>
      <div className="comments">
        {(comments) ? comments.map((comment: any, i: number) => <Comment comment={comment} key={i}></Comment>) : <div>No comments</div>}
      </div>
    </div>
  )
}


export default AdminComments;