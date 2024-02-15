import React from 'react';
import {useForm} from "react-hook-form";
import {options} from "axios";

const CarsForm = () => {
    const {register,reset, handleSubmit, formState :{isValid, errors}, setValue}= useForm
    ({mode:'all'});



         const save =(car) =>{

         }
    return ( <form onSubmit={handleSubmit(save)}>
            <input type={"text"} placeholder={'brand'} {...register('brand',
                {pattern:/[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/})}/>
             <input type={"text"} placeholder={'price'} {...register('price', {valueAsNumber: true}
             />
            <input type={"text"} placeholder={'year'}{...register('year', {valueAsNumber:true})}/>
        <button>Save</button>
        </form>

         );
};

export default CarsForm;