import React from 'react';

const CarsForm = () => {
    const {register, reset, handleSubmit, formState :{isValid, errors}, setValue}



         const save =(car) =>{

         }
    return ( <form onSubmit={save}>
            <input type={"text"} placeholder={'brand'} {...register('name')}/>
             <input type={}/>

        </form>

         );
};

export default CarsForm;