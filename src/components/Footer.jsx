import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col justify-center items-center bg-gray-800 text-white'>
        <div className='p-8'>Icon</div>
        <div className='flex p-8'>
          <div className='px-2'>Home</div>
          <div className='px-2'>About</div>
          <div className='px-2'>Cart</div>
        </div>
        <div className='p-8'>Copyright</div>
      </div>
    </footer>
  );
};

export default Footer;
