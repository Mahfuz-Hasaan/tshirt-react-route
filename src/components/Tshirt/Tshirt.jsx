import React from 'react';

const Tshirt = ({tshirt,handleAddTocart}) => {
    const {picture,name,price,gender} = tshirt
    return (
        <div className='tshirt-container p-5 drop-shadow-xl rounded-lg border-2 w-fit'>
           <img className='w-64 h-80 drop-shadow-md rounded-lg' src={picture} alt="" />
           <div className="product-details pt-8 pb-2 px-1">
            <p className='font-semibold text-2xl'>{name}</p>
            <p>
            <span className='font-semibold text-lg'>Price : {price}</span>
            </p>
            <button className='rounded-md px-24 py-2 mt-5 bg-stone-100 hover:bg-amber-500 font-semibold' onClick={()=>handleAddTocart(tshirt)}>Buy Now</button>
           </div>
        </div>
    );
};

export default Tshirt;