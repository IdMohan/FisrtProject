import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import FirstView from './FirstView';
import Footer from './Footer';
import Details from './Details';
import PageNotFound from './PageNotFound';
import Login from './Login'
import CardPage from './CardPage';
import SignUpPage from './SignUpPage';
import CardRow from './CardRow';
import { getProductData } from './Api';


function App() {

  const saveDataString = localStorage.getItem("my-cart") || "{}";
  const saveData = JSON.parse(saveDataString);

  const [cart, setCart] = useState(saveData);
    const [count, setCount] = useState(0);


  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count }
    setCart(newCart)
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
 
      setCount(totalCount)
      console.log("view count", totalCount, count)
    }
  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current]
  }, 0)

  //  if (count < 0) {
  //     return (<div className="text-red-800 text-sm text-center">Select the right numbers</div>)
  //  }
  return (
    <>
      <div className="flex flex-col">
        <div className="text-black h-fit overflow-x">

          <Header productCount={count} />
          <Routes>
            <Route index element={<FirstView />} />
            <Route path="/details/:id" element={<Details onAddCart={handleAddToCart} />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/signuppage/" element={<SignUpPage />} />
            <Route path="/cardpage/" element={<CardPage cart={cart} />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="cardpage" element={<CardRow saveData={setCart} newDetail={count} />} />

          </Routes>

        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
