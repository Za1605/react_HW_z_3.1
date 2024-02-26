import axios from "axios";
import {baseURL} from "../constants/urls";


  const apiServise = axios.create({baseURL})

export {apiServise};