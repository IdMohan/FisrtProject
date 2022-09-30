import React from "react";
import Product from './Product';

function ProductList({ products }) {

  return (
    <>
      <div className="bg-gray-50">
        <div className="sm:grid grid-cols-3 gap-2 space-y-5">
          {(products || [id]).map(function(item) {
            return <Product key={item.id} {...item} />
          })}
        </div>
      </div>
    </>
  );
};
export default ProductList; 