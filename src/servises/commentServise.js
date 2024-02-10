import React from 'react';
import {apiServise} from "./apiServise";
import {urls} from "../constants/Urls";


const commentServise = {
    getAll:()=> apiServise.get(urls.comments),
    create:(data) => apiServise.post(urls.comments, data)
};

export {
    commentServise
}