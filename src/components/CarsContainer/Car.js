import React from 'react';

const Car = ({car}) => {

    const {id, brand, prise, year}= car;
    return ( <div>
         <div>id:{id}</div>
         <div>brand:{brand}</div>
          <div>prise:{prise}</div>
          <div>year:{year}</div>
        <button>Save</button>
        <button>Delete</button>


    </div> );
};

export default Car;