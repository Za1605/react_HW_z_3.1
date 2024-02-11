import React,{useEffect,useState} from 'react';
import {commentServise} from "../servises/commentServise";
import ComForm from "./ComForm";
import Comments from "./Comments";




const CommentsContainer = () => {

    const [comments, setComments]= useState([])


    useEffect(() => {
        commentServise.getAll().then(({data}) => setComments(data))
    },[]);

    return ( <div>
        <ComForm setComments={setComments} />
        <br/>
        <Comments comments ={comments}/>
        </div> );
};

export default CommentsContainer;