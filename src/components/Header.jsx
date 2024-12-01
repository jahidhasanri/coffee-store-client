import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='rancho-regular w-11/12 mx-auto bg-amber-950'>
        <nav className='flex justify-center items-center gap-6 p-4 mt-1'>
         <img src="/public/images/icons/logo1 1.png" alt="" />
         <h3 className='text-6xl font-normal text-[#FFFFFF]'>Espresso Emporium</h3>
         <NavLink className='btn' to="/singin">Singin</NavLink>
         <NavLink className='btn' to="/users">users</NavLink>
         <NavLink className='btn' to="/login">Login</NavLink>
        </nav>
     </div>
    );
};

export default Header;