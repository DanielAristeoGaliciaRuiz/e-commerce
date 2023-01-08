import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProductCart } from '../../store/slices/cart.slice'
import productsSlice from '../../store/slices/products.slice'
import "./styles/ProductCard.css"
const ProductsCard = ({product}) => {
    const navigate=useNavigate()
  
    const dispatch=useDispatch()

    const handleClickProducts=()=>{
        navigate(`/products/${product.id}`)
    }

    const handleClickAddCart=(e)=>{
        e.stopPropagation()
        const data={
          id:product.id,
          quantity:1
        }

        dispatch(addProductCart(data))
    }

    return (
    <article className='productCard' onClick={handleClickProducts}>
      <header className='productCard-header'>
        <img className='productCard-header-img1' src={product.productImgs[0]} alt="" />
        <img className='productCard-header-img2' src={product.productImgs[2]} alt="" />
      </header>
      <div className='productCard-body'>
        <h3 className='productCard-title'>{product.title}</h3>
        <h4 className='productCard-title-price'>Price</h4>
        <span className='productCard-price'>${product.price}</span>

        <button className='productCard-btn' onClick={handleClickAddCart}>
        <i className='bx bxs-cart'></i>
        </button>
      </div>
    </article>
  )
}

export default ProductsCard