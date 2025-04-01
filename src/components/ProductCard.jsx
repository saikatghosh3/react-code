import React from 'react'

const ProductCard = (props) => {
  return (
    <div>
      <div style={ {border:"1px solid grey", padding: "10px", width:"250px",borderRadius:"8px", margin: "10px"}}>
       <h2>{props.name}</h2>
       <p>Price: ${props.price}</p>
       <p style={{color: props.inStock? "green": "red"}}>
        {props.inStock ? "In Stock" : "Out of Stock"}
       </p>
      </div>
    </div>
  )
}

export default ProductCard
