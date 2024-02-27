import React,{useEffect,useState} from 'react';
import {commentSevise} from "../../servises/commentSevise";
import Comment from "./Comment";

const Comments = () => {

    const [comments,setComments] = useState([]);

    useEffect(() => {
        commentSevise.getAll().then(({data}) => setComments(data))
    },[]);
    return (
        <div>
            {comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}
        </div> );
};

export default Comments;