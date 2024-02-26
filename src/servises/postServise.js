import {apiServise} from "./apiServise";
import {urls} from "../constants/urls";


const postServise = {
    getById:(id)=> apiServise.get(urls.posts.ById(id))
};

export {
    postServise
};