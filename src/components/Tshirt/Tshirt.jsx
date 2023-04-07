import React from 'react';

const Tshirt = (props) => {
    const {picture,name,price,gender} = props.tshirt
    return (
        <div className='tshirt-container p-5 drop-shadow-xl rounded-md border-2'>
           <img className='w-64 h-80 drop-shadow-md rounded-md' src={picture} alt="" />
           <div className="product-details pt-8 pb-2 px-1">
            <p className='font-semibold text-2xl'>{name}</p>
            <p>
            <span className='font-semibold text-lg'>Price : {price}</span>
            </p>
            <button className='rounded-md px-24 py-2 mt-5 bg-stone-100'>Buy Now</button>
           </div>
        </div>
    );
};

export default Tshirt;