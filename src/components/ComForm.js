import React from 'react';
import {useForm} from "react-hook-form";
import {commentServise} from "../servises/commentServise";

const ComForm = ({setComments}) => {
    const {reset, register, handleSubmit} = useForm();

    const save = (item) => {
      commentServise.create(item).then(({data})=> setComments(prev=> [...prev,data]));

    }
    return(
        <form onSubmit={handleSubmit(save)}>
        <input type="text" placeholder={'name'} {...register('name')}/>
        <input type="text" placeholder={'title'} {...register('title')}/>
        <input type="text" placeholder={'body'} {...register('body')}/>
        <button>Save</button>
            </form>
);
};

export default ComForm;