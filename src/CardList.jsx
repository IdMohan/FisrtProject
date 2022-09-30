import React, { useState } from "react";
import CardRow from "./CardRow";


function CardList() {

    return (
        <>
            <div className="md:container m-auto mt-20">
            <div className="bg-blue-400 h-16 w-10/12 m-auto -space-x-7">
             <div className="text-center grid grid-cols-4 py-4">
                    <h1 className="sm:visible md:visible lg:visible xxsm:invisible xsm:invisible">Product</h1>
                    <h1>Name</h1>
                    <h1>Quantity</h1>
                    <h1>Sub Total</h1>
               </div>
              
            </div>
            </div>
        </>

    )
}

export default CardList