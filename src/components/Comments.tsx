import { useContext, useState, useEffect, ChangeEvent } from "react";
import { Context, StateType } from "../App";
import firebase from "firebase/app";
import "firebase/firestore";
import { Heading, TextArea, Button, Markdown, Box } from "grommet";
import { Trash } from "grommet-icons";
import { apiPost } from "../utils/api";

interface CommentProps {
  slug: string;
}

interface CommentType {
  userid: string;
  message: string;
  displayname: string;
  status: "approved" | "pending" | "rejected";
  timestamp: firebase.firestore.Timestamp;
  id: string;
  avatar?: string;
}

const NoComment = () => (
  <div className="no-comment">You must log in to leave a comment</div>
);

const deleteComment = async (
  id: string,
  ref: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
) => {
  try {
    await ref.doc(id).delete();
  } catch (err) {
    console.error(err);
    alert("Error deleting comment");
  }
};

const Comment: React.FunctionComponent<{
  comments: CommentType[];
  dbRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
  uid: string;
}> = ({ comments, dbRef, uid }) => {
  return (
    <div>
      {comments.map((comment: any) => (
        <div className="commentContainer" key={comment.id}>
          {uid === comment.userid && (
            <Trash
              color="#453762"
              className="deleteComment"
              onClick={() => {
                deleteComment(comment.id, dbRef);
              }}
            />
          )}
          <div className="comment">
            <div className="username">
              {comment.avatar ? (
                <img
                  alt={comment.displayName}
                  src={comment.avatar}
                  className="avatar-sm"
                />
              ) : (
                ""
              )}
              <span>{comment.displayname}</span>
            </div>
            <div className="timestamp">
              {comment.timestamp.toDate().toLocaleDateString()}{" "}
              {comment.timestamp.toDate().toLocaleTimeString()}
            </div>
            <div className="message">
              <div className="messagespan">
                <Markdown>{comment.message}</Markdown>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentForm: React.FunctionComponent<{
  state: StateType;
  slug: string;
}> = ({ state, slug }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useContext(Context);
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const addComment = (event: any) => {
    event.preventDefault();
    setLoading(true);
    postComment(message).then(() => {
      setLoading(false);
    });
  };

  const postComment = (message: string) => {
    return new Promise(async (resolve) => {
      if (state.user) {
        const payload = {
          slug: slug,
          message: message,
          displayname: state.user.displayName,
          userid: state.user.uid,
          token: await state.user.getIdToken(),
          avatar: state.user.photoURL,
        };

        const post = await apiPost(payload, "/post");
        const res = await post.json();
        if (res.message === "Post submitted") {
          toast("Post submitted for admin approval");
          setMessage("");
          resolve(null);
        } else {
          alert(res.message);
          resolve(null);
        }
      } else {
        alert("User not found");
        resolve(null);
      }
    });
  };

  return (
    <div>
      <form onSubmit={addComment}>
        <TextArea value={message} onChange={handleInputChange}></TextArea>
        <Button
          primary
          onClick={addComment}
          disabled={loading}
          label={loading ? "Posting..." : "Post Comment"}
        />
        <Box>
          <Heading level={4}>Comment preview</Heading>
          <Markdown>{message}</Markdown>
        </Box>
      </form>
    </div>
  );
};

const Comments: React.FunctionComponent<CommentProps> = ({ slug }) => {
  const state = useContext(Context);
  const [comments, updateComments] = useState<CommentType[]>([]);
  const [commentsRef, setCommentsRef] = useState<
    firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
  >();

  useEffect(() => {
    if (!commentsRef && state.initialized)
      setCommentsRef(
        firebase
          .firestore()
          .collection("comments")
          .doc(slug)
          .collection("comments")
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.initialized]);
  useEffect(() => {
    if (commentsRef) {
      let unsunscribe: any;
      if (unsunscribe) {
        unsunscribe();
      }
      unsunscribe = firebase.firestore();
      commentsRef.where("status", "==", "approved").onSnapshot((snapShot) => {
        const data = snapShot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id } as CommentType;
        });
        if (data) {
          updateComments(data);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentsRef]);

  return (
    <div className="commentsContainer">
      <Heading level={2}>Comments</Heading>
      <div className="comments">
        {(comments && commentsRef) ? (
          <Comment
            comments={comments}
            dbRef={commentsRef}
            uid={state.user ? state.user.uid : ""}
          ></Comment>
        ) : (
          <div>No comments</div>
        )}
      </div>
      {state.user ? (
        <CommentForm state={state} slug={slug} />
      ) : (
        <NoComment></NoComment>
      )}
    </div>
  );
};

export default Comments;
