import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white">
      <div className="py-12 px-6">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <Link to="/">
            <img
              src={Logo}
              alt="Studio Ghibli Library"
              className="w-12 rounded-full mb-4 opacity-80 hover:opacity-100 transition__ease"
            />
          </Link>
          <p className="font-heading text-lg text-green-300 mb-5 italic">
            Studio Ghibli Library
          </p>
          <nav className="flex gap-6 mb-6 text-sm font-semibold text-green-200 font-sans">
            <Link className="hover:text-white transition__ease" to="/">
              Home
            </Link>
            <span className="cursor-not-allowed opacity-40">About</span>
            <Link to="/cart" className="hover:text-white transition__ease">
              Cart
            </Link>
          </nav>
          <p className="text-green-600 text-sm font-sans">
            Made with ♥ by Chaylin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
