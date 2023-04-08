import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart,setCart] = useState([]);
    const handleAddTocart = tshirt =>{
        const newCart = [...cart,tshirt];
        setCart(newCart);
    }

    const handleRemoveFromCart = id =>{
        const remaining = cart.filter(ts => ts._id !==id);
        setCart(remaining);
    }
    return (
        <div className='home-container flex w-11/12 mx-auto justify-center gap-10 gap-36 drop-shadow-md rounded-md my-10 w-fit'>
            <div className="tshirts-container grid grid-cols-3 gap-10 w-fit">
            {
                tshirts.map(tshirt => <Tshirt
                key={tshirt._id}
                tshirt = {tshirt}
                handleAddTocart = {handleAddTocart}
                ></Tshirt>)
            }
            </div>
            <div className="cart-container w-64 h-fit text-center rounded-lg border-2 drop-shadow-lg pb-10">
                <Cart cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;