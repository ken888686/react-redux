import React from 'react';
import useProducts from '../hooks/useProducts';
import ProductItem from './ProductItem';

function ProductList() {
  const { products } = useProducts();

  const renderList = products.map((x) => (
    <li
      key={x.id}
      className="rounded-lg bg-transparent/20 px-7 py-5 shadow-lg transition-all hover:scale-105 hover:cursor-pointer hover:bg-transparent/50 hover:shadow"
    >
      <ProductItem
        id={x.id}
        title={x.title}
        price={x.price}
        category={x.category}
        description={x.description}
        image={x.image}
        rating={x.rating}
      />
    </li>
  ));

  return <ul className="flex flex-wrap items-center justify-center gap-4">{renderList}</ul>;
}

export default ProductList;
