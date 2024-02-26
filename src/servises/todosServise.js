import axios from "axios";
import {urls} from "../constants/urls";


const todosServise = {
    getAll:()=> axios.get(urls.todos)
};

export {
    todosServise
};