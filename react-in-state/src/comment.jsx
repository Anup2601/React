import { useState } from "react";
import CommentForm from "./commentForm";
import "./comment.css";

export default function comment(){
    let [comments,setcomments]=useState([{
        username:"anup@123",
        remark:"good",
        rating:5
    },
]);
let addNewComment=(comment)=>{
    setcomments((currComments)=>[...currComments,comment]);
};
return(
    <>
        <div>
            <h2>All Comment</h2>
            {comments.map((comment, idx)=>(
                <div className="comment" key={idx}>
                <span>{comment.remark}</span>
                &nbsp;
                <span>(rating={comment.rating})</span>
                <p>- {comment.username}</p>
                </div>
            ))}
        </div>
        <hr></hr>
        <CommentForm addNewComment={addNewComment}/>
    </>
);
}