import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import { getProductData } from './Api';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
import PageNotFound from './PageNotFound';
import Button from './Button';
import { HiArrowCircleLeft } from 'react-icons/hi'
import { BiLeftArrowCircle } from 'react-icons/bi'
import { FiArrowRightCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import Btn from './Btn';


function Details({ onAddCart }) {
  // you did not define onAddto cart func. in App.jsx

  const [count, setCount] = useState(0);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const id = +useParams().id;

  useEffect(
    function () {
      const showProduct = getProductData(id).then(function (product) {
        const viewProduct = product
        setProduct(viewProduct);
        setLoading(false);
      });
      showProduct.catch(function (error) {
        console.log('Some Problam in Api return data', error);
        setLoading(false);
        return <PageNotFound />;
      });
      //console.log('new data is', resopnse.data);
    },
    [id]
  );
  function handleCountChange(event) {
    setCount(+event.target.value)
  }
  function handleButtonChange() {
    console.log("button is working", handleButtonChange);
    onAddCart(+id, +count)
    console.log('onAddCart', id, count);
    localStorage.clear(count)
  }

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <PageNotFound />;
  }




  return (
    <>

      <div className="bg-gray-200 shadow-black shadow-xl h-56 p-5 m-auto mb-24">
        <Link to="/">
          <HiArrowCircleLeft className="text-4xl sm:text-3xl" />
        </Link>
        <div className="w-[85%] bg-white px-1 mx-auto rounded-lg mb-20">
          <div className="lg:flex">
            <div className="w-full aspect-square object-cover p-[4px] content-center justify-center flex">
              <img
                className="w-full h-full object-cover m-auto p-[8px] flex items-center"
                src={product.thumbnail} />
            </div>
            <div className="pl-4 mt-20">
              <h1 className="text-5xl flex-col m-3 tracking-widest text-tomato-default">
                {product.title}
              </h1>
              <h1 className="text-gray-400 text-sm flex-col m-3 tracking-widest">
                {product.category}
              </h1>
              <h3 className="text-black text-medium flex mt-2">
                <HiOutlineCurrencyRupee className="text-xl mt-[3px] mr-2" />
                {product.price}
              </h3>
              <p className="m-3 leading-7">
                {product.description}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                velit maiores nemo ex cupiditate? praesentium recusandae.
              </p>
              <div className="px-2 mt-5 mb-2 space-x-5">
                <Btn>Buy Now</Btn>
                <button onClick={handleButtonChange} className="bg-logo-second hover:bg-tomato-light-2 px-2 py-2 text-xl" name="btnOne" type="button">
                  Add to Cart
                </button>
                <span className="p-2 m-5">
                  <input
                    value={count}
                    onChange={handleCountChange}
                    type="number"
                    placeholder="Quntity"
                    className="border-2 hover:border-tomato-dark m-8"
                  />
                </span>
              </div>
              <div className="flex text-black space-x-56 mt-12">

                <div className="bg-blue-900 p-[0.5rem] w-10 lg:block">
                  {id > 1 && (<Link to={"/details/" + (id - 1)} ><BiLeftArrowCircle className="sm:text-xl text-white hover:animate-spin" />
                      </Link>)} 
                      <p className="text-xs text-white">Old</p>
                </div>
                <div className="bg-red-700 p-[0.5rem] w-10 ml-56">
                       <Link to={"/details/" + (id + 1)}> <FiArrowRightCircle className="sm:text-xl text-white hover:animate-spin" />
                    </Link>  <p className="text-xs text-white">Next</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
export default Details;
