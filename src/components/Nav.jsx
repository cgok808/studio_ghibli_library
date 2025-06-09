import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { ShoppingCart } from "lucide-react";
import { Menu } from "lucide-react";

const Nav = ({ numberOfItems }) => {
  return (
    <nav className='bg-[#ddd4bb]'>
      <div className='w-full flex items-center justify-between p-6 px-10 lg:px-20'>
        <Link to='' className='flex'>
          <img src={Logo} alt='' className='w-14 rounded-full' />
        </Link>
        <ul className='flex'>
          <li className='ml-4 font-bold hidden sm:block'>
            <Link className='' to='/'>
              Home
            </Link>
          </li>
          <li className='ml-4 font-bold hidden sm:block'>
            <Link className='' to='/films'>
              Catalogue
            </Link>
          </li>
          <div className='sm:hidden mr-2'>
            <Menu />
          </div>
          <li className='ml-4'>
            <Link className='' to='/cart'>
              <ShoppingCart />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
