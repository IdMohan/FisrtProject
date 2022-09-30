import React, { useState } from "react";
import { useEffect } from "react";
import { getProductData } from "./Api";
// import { getProductData } from "./Api";
import CardList from "./CardList";
 


function CardRow({ title, price, id, thumbnail, saveData, newDetail }) {

// const [newData, setNewData] = useState({saveData, newDetail});

// useEffect(
//   function(){
//         {products.map(function(price){
//               getProductData(price)
//         })}
//     setNewData(saveData)
//   }
// )
  return (

    <>
      <div className="md:container m-auto mt-3">
      <div className="grid grid-cols-4 sm:grid-rows-4 m-auto border-solid border-b-slate-900 w-3/4 space-x-7">
          <img src={thumbnail} className="w-24 xxsm:invisible sm:visible md:visible lg:visible xl:visible"/>
          <h1 className="text-xl font-bold">{title}</h1>
          <h2 className="text-xl font-bold">{price}</h2>
          <div className="inline-block">
            <input
              type="number"
              className="text-xl font-bold w-10 h-10 border-2" />
          </div>
          </div>
      </div>
       

      {/* <div className="flex flex-col border-2 m-20 bg-white">
        <div className="flex justify-between border border-b-2 p-4 bg-gray-200">
          <div className="mx-auto">
            <h2 className="text-xl font-bold"><img src={thumbnail} /></h2>
            </div>
            <h1 className="text-xl font-bold">{title}</h1>
            <h2 className="text-xl font-bold">{price}</h2>
          <div className="gap-10">
            <input
              type="number"
              className="py-2 text-xl font-bold w-10 h-10 text-center border-2"/>
          </div>
        </div>
      </div> */}




    </>

  )

}
export default CardRow;