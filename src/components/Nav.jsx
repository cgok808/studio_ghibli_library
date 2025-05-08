import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className='bg-green-900 text-white p-6 flex justify-between'>
        <Link>Icon/Logo</Link>
        <ul className='flex gap-4'>
          <li>Home</li>
          <li>books</li>
          <li>cart</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
