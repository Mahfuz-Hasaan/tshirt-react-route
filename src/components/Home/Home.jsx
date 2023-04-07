import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts = useLoaderData();
    console.log(tshirts);
    return (
        <div className='home-container flex w-11/12 mx-auto justify-center gap-10 gap-36 drop-shadow-md rounded-md my-10'>
            <div className="tshirts-container grid grid-cols-3 gap-10">
            {
                tshirts.map(tshirt => <Tshirt
                key={tshirt._id}
                tshirt = {tshirt}
                ></Tshirt>)
            }
            </div>
            <div className="cart-container bg-blue-300 w-64 h-96 text-center">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;