import React, { useState } from 'react';
import productsData from '../Api/Watchesapi'
import Details from './Details';
const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h1>Product List</h1>
      {productsData.map((product) => (
        <div key={product.id} onClick={() => handleProductClick(product)}>
          <h3>{product.name}</h3> 
        </div>
        
      ))}
      
    </div>
  );
};

export default ProductList;
