

import {baseURL} from "../constants/urls";

import axios from "axios";


const apiServise = axios.create({baseURL});

export {
    apiServise
}