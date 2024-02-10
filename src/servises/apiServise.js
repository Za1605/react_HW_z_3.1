import axios from "axios";
import {baseURL} from "../constants/Urls";



const apiServise = axios.create({baseURL});

export {
    apiServise
};