import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <p className='px-10 py-2 bg- shadow-lg w-fit mx-auto rounded-lg my-5 bg-stone-100'>Order Summery</p>
           <p><span className='font-semibold text-lg '>Product Count : {cart.length}</span></p>
           <hr /><br />
            
            {
                cart.map(tshirt => <div className='flex text-center justify-between items-center px-5'>
                    <p className=' w-32 px-4 rounded-md border-2 text-center' key={tshirt._id}>{tshirt.name}
                    </p>
                    <p className=''><button className='hover:bg-amber-500 text-start  px-4 rounded-md border-2 my-2'>X</button></p>
                </div>)
            }
            
        </div>
    );
};

export default Cart;