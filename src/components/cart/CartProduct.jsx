import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductCart } from '../../store/slices/cart.slice'
import "./styles/CartProduct.css"

const CartProduct = ({cartProduct}) => {
  const dispatch=useDispatch()

  const handleDeleteProduct=(id)=>{
    dispatch(deleteProductCart(cartProduct.id))
  }
  return (
    <article className='cartProduct'>
      <h4 className='cartProduct-brand'>{cartProduct.brand}</h4>
      <h3 className='cartProduct-title'>{cartProduct.title}</h3>
      <div className='cartProduct-quantity'>
        <p>{cartProduct.productsInCart.quantity}</p>
        <footer className='cartProduct-footer'>
          <h3 className='cartProduct-price'><span className='cartProduct-price-title'>Total</span>${(cartProduct.productsInCart.quantity *cartProduct.price).toFixed(2)}</h3>
        </footer>
        <i onClick={handleDeleteProduct} className='cartProduct-trash bx bx-trash-alt'></i>
      </div>
    </article>
  )
}

export default CartProduct