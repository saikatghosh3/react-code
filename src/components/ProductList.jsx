import React from 'react'
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div>
        <h1>Prduct List</h1>
        <ProductCard name = "Laptop" price= {1000} inStock ={true}/>
        <ProductCard name = "mouse" price= {500} inStock ={true}/>
        <ProductCard name = "keyboard" price= {600} inStock ={false}/>
        <ProductCard name = "soundBox" price= {1500} inStock ={true}/>
      
    </div>
  )
}

export default ProductList
