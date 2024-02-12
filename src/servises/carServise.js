import {apiServise} from "./apiServise";
import {urls} from "../constants/urls";


const carServise = {
    getAll:()=> apiServise.get(urls.cars.base),
    create:(data)=>apiServise.post(urls.cars.base, data),
    updateById:(id,data)=> apiServise.put(urls.cars.byId(id), data),
    deleteById:(id)=> apiServise.delete(urls.cars.byId(id))
}

export {carServise}