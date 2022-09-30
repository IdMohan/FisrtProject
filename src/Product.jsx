import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';

function Product({ thumbnail, title, id, price, category }) {

  return (
    <>
      <div className="w-[80%] border-b-2 px-1 mx-auto hover:border-logo-second rounded-md cursor-pointer shadow-2xl">
        <div className="w-full aspect-square">
          <Link to={'/details/' + id}><img
            className="w-full h-full object-cover p-[4px] mt-1 flex items-center transition duration-700 ease-in-out"
            src={thumbnail}
          /></Link>
        </div>
        <div className="pl-4">
          <h5 className="text-tomato-dark text-xl">{title}</h5>
          <h3 className="text-gray-400 text-sm">{category}</h3>
          <h5 className="text-black text-medium flex mt-2"><HiOutlineCurrencyRupee className="text-xl mt-[3px] mr-2" />{price}</h5>
          <div className="px-2 mt-5 mb-2">
            <Link
              className="text-logo-second font-bold text-sm hover:text-tomato-default hover:translate-x-6 transition duration-700 ease-in-out"
              to={'/details/' + id}>
              More Details
							</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
