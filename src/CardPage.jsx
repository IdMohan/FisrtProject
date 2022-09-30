import React, { useState, useEffect } from 'react';
import { getProductData } from './Api';
import CardRow from './CardRow';
import Loading from './Loading';
import CardList from './CardList';

function CardPage({ cart }) {
   

   

  const [products, setProducts] = useState([]);
  const [localCart, setLocalCart] = useState({ cart })
  const [loading, setLoading] = useState(true);

  const productIds = Object.keys(cart);
  console.log("cart list id and product is", cart, productIds)


  useEffect(
    function  () {
      setLocalCart(cart)
      console.log("local cart is", setLocalCart)
    }, 
    [cart]
     
  );

  useEffect(
    function(){
      const myCartPromises = productIds.map(function(id){
           return getProductData(id)
      });

      Promise.all(myCartPromises).then(function(products){
       setProducts(products);
       setLoading(false)
       
      });

    }, [cart]
  )
  return (
    <>
    <CardList />
      <div>{products.map(function (proList) {
        console.log("products list is ", proList)
        return <CardRow key={proList.id} title={proList.title} thumbnail={proList.thumbnail} />
      })}</div>
    </>
  );
}

export default CardPage;

 
