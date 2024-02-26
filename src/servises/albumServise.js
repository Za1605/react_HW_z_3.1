import {apiServise} from "./apiServise";
import {urls} from "../constants/urls";


const albumServise = {
    getAll:() => apiServise.get(urls.albums)
};

export {
    albumServise
}