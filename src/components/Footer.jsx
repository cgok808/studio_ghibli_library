import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className='bg-[#242424] text-white'>
      <div className='py-14 px-0'>
        <div className='w-full max-w-7xl my-0 mx-auto px-6 flex items-center flex-col'>
          <Link to='/'>
            <img src={Logo} alt='' className='w-14 rounded-full'></img>
          </Link>
          <div className='mt-5 mb-6'>
            <Link className='px-2' to='/'>
              Home
            </Link>
            <span href='/' className='cursor-not-allowed px-2'>
              About
            </span>
            <Link to='/cart' className='px-2'>
              Cart
            </Link>
          </div>
          <div>Made by Chaylin!</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
