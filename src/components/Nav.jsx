import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { ShoppingCart, Menu } from "lucide-react";

const Nav = ({ numberOfItems }) => {
  return (
    <nav className="bg-tan-200 sticky top-0 z-50 shadow-sm">
      <div className="w-full flex items-center justify-between py-4 px-8 lg:px-16">
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="Studio Ghibli Library" className="w-11 rounded-full shadow-sm" />
          <span className="hidden md:block font-heading text-lg font-semibold text-green-900 tracking-wide">
            Studio Ghibli Library
          </span>
        </Link>
        <ul className="flex items-center">
          <li className="hidden sm:block">
            <Link
              className="px-4 py-2 rounded-lg font-semibold text-green-900 hover:bg-tan-300 transition__ease"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              className="px-4 py-2 rounded-lg font-semibold text-green-900 hover:bg-tan-300 transition__ease"
              to="/films"
            >
              Catalogue
            </Link>
          </li>
          <div className="sm:hidden mr-2 text-green-900">
            <Menu size={22} />
          </div>
          <li className="ml-2 relative">
            <Link
              className="flex items-center p-2 rounded-lg text-green-900 hover:bg-tan-300 transition__ease"
              to="/cart"
            >
              <ShoppingCart size={22} />
              {numberOfItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold leading-none">
                  {numberOfItems > 9 ? "9+" : numberOfItems}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
