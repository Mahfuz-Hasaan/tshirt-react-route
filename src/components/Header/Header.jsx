import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex gap-10 font-semibold text-lg bg-cyan-100 w-11/12 mx-auto py-5'>
            <Link to= "/" className=' hover:bg-yellow-300 px-3 rounded-lg'>Home</Link>
            <Link to= "/order-review" className=' hover:bg-yellow-300 px-3 rounded-lg'>Order Review</Link>
            <Link to= "/about" className=' hover:bg-yellow-300 px-3 rounded-lg'>About</Link>
            <Link to= "/contact" className=' hover:bg-yellow-300 px-3 rounded-lg'>Contact</Link>

        </nav>
    );
};

export default Header;