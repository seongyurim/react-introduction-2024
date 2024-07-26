import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Product = () => {
  let [query, setQeury] = useSearchParams();
  console.log(query.get('section'));

  return (
    <div>
      <h1>Show All Products</h1>
    </div>
  );
};

export default Product;
