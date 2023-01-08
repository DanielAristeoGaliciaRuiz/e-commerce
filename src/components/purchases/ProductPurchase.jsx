import React from 'react'
import "./styles/ProductPurchase.css"

const ProductPurchase = ({productPurchase}) => {
  return (
    <article className='productPurchase'>
        <h4 className='productPurchase-title'>{productPurchase.title}</h4>
        <h4 className='productPurchase-quantity'>{productPurchase.productsInCart.quantity}</h4>
        <h4 className='productPurchase-price'>{(productPurchase.productsInCart.quantity*productPurchase.price).toFixed(2)}</h4>
    </article>
  )
}

export default ProductPurchase