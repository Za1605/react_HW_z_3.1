
import {apiServise} from "./apiServise";
import {urls} from "../constants/Urls";


const commentServise = {
    getAll:()=> apiServise.get(urls.comments.base),
    create:(data) => apiServise.post(urls.comments.base, data),
    getById:(id)=>apiServise(urls.comments.byId(id))
};

export {
    commentServise
}