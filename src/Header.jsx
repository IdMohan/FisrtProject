import { Link } from 'react-router-dom';
import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import Login from './Login';
import CardPage from './CardPage';

function Header({ productCount }) {

  return (
    <div className="bg-white">
      <div className="flex py-2 px-2">
        <div className="text-green-500 flex ml-36 cursor-pointer">
          <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Udacity_logo.png" 
            className="h-16 relative top-4 text-center"
              alt="logo site" />
          </Link>
        </div>
      </div>

      <div className="text-tomato-light-2 text-3xl flex justify-end relative 
          bottom-12 mr-16">
        <div className="mr-12 text-xl font-bold"><Link to="/login/">Log In</Link>
        </div>
        <Link to="/cardpage/">
          <BiShoppingBag className="hover:text-logo-second cursor-pointer" />
          <span className="text-center relative text-black text-sm left-[0.7rem] bottom-[2.5rem]">
            {productCount}</span></Link>
      </div>
    </div>
  );
}

export default Header;
