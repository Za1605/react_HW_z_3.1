import React,{useEffect,useState} from 'react';
import {useLocation} from "react-router-dom";
import {postServise} from "../servises/postServise";
import Post from "../components/PostContainer/Post";

const PostPage = () => {

    const [post,setPost] = useState(null);
    const {state:{postId}} =useLocation();

    useEffect(() => {
        postServise.getById(postId).then(({data})=>setPost(data))
    },[postId]);
    return (
        <div>
        {post && <Post post={post}/>}
        </div> );
};

export default PostPage;