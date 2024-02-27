import React from 'react';
import {useNavigate} from "react-router-dom";

 const Comment =({comment})=>{

        const {id,name,email,postId} = comment;

        const navigate = useNavigate();
        return ( <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>postId:{postId}</div>
            <button onClick={()=> navigate('post', {state: {postId}})}> getPost</button>
        </div> )
    };


export default Comment;