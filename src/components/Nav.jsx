import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <nav className='bg-[#ddd4bb]'>
      <div className='w-full max-w-7xl py-6 flex justify-between items-center mx-auto text-white'>
        <Link to='' className='flex'>
          <img src={Logo} alt='' className='w-14 rounded-full' />
        </Link>
        <ul className='flex'>
          <li className='ml-4 font-bold'>
            <Link className='' to='/'>
              Home
            </Link>
          </li>
          <li className='ml-4 font-bold'>
            <Link className='' to='/books'>
              Books
            </Link>
          </li>
          <li className='ml-4'>
            <Link className='' to='/cart'>
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
