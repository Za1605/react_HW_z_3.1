import React,{useEffect,useState} from 'react';


import {carServise} from "../../servises/carServise";
import CarsForm from "./CarsForm";
import Cars from "./Cars";

const CarsContainer = () => {
    const [cars,setCars] = useState([]);


    useEffect(() => {
        carServise.getAll().then(({data})=> setCars(data));
    },[]);
    return (
        <div>
            <CarsForm/>
            <br/>
            <Cars cars={cars} />
        </div> );
};

export default CarsContainer;