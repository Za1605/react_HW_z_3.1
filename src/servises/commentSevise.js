import axios from "axios";
import {urls} from "../constants/urls";


const commentSevise = {
    getAll:()=> axios.get(urls.comments)
};

export {
    commentSevise
};