import React from 'react';
import { Product } from '../models/Product';

function ProductItem(prop: Product) {
  const { id, title, price, category, description, image, rating } = prop;
  return (
    <a className="flex h-96 w-40 flex-col items-center justify-between" href={`/product/${id}`}>
      <div className="m-auto flex flex-col justify-center">
        <img src={image} alt={title} className="" />
      </div>
      <div>
        <h2>{title}</h2>
        <span className="block text-center">$ {price}</span>
      </div>
    </a>
  );
}

export default ProductItem;
