import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductCart } from '../../store/slices/cart.slice'
import "./styles/ProductInfo.css"

const positionImages=["first","second","third"]

const ProductInfo = ({product}) => {

    const [quantity, setQuantity] = useState(1)
    const [currentImg, setCurrentImg] = useState(0)
   
    const dispatch=useDispatch()

    const handlePlus=()=>{
        setQuantity(quantity+1)
    }
    const handleLess=()=>{
        const newValue=quantity-1
        if(newValue>=1){
            setQuantity(newValue)
        }
    }
    const handleAddProduct=()=>{
        const data={
            id:product.id,
            quantity:quantity
          }
          dispatch(addProductCart(data))
    }
    const handleClickLeft=()=>{
        const newValue=currentImg-1
        if(newValue>=0){
            setCurrentImg(newValue)
        }
        else{
            setCurrentImg(positionImages.length-1)
        }
    }
    
    const handleClickRigth=()=>{
        const newValue=currentImg+1
        if(newValue<=2){
           setCurrentImg(newValue)
        }else{
            setCurrentImg(0)
        }
    }

  return (
    <article className="productInfo" >
        <div className='productInfo-slider'>
            <div className={`productInfo-slider-container ${positionImages[currentImg]}`}>
            <img src={product?.productImgs[0]} alt="" />
            <img src={product?.productImgs[1]} alt="" />
            <img src={product?.productImgs[2]} alt="" />
            </div>
            <i onClick={handleClickLeft} className='productInfo-slider-arrowLeft bx bxs-left-arrow' ></i>
            <i onClick={handleClickRigth} className='productInfo-slider-arrowRigth bx bxs-right-arrow'></i>
        </div>
        <div className='productInfo-info'>
        <h2 className="productInfo-title">{product?.title}</h2>
        <p className="productInfo-description">{product?.description}</p>
        <footer className="productInfo-footer">
            <div className="productInfo-container-price">
                <h3 className="productInfo-price-title">Price</h3>
                <span className="productInfo-price">${product?.price}</span>
            </div>
            <div className="productInfo-container-quantity">
                <h3 className="productInfo-quantity-title">Quantity</h3>
                <div className="productInfo-container-counter">
                    <div className="productInfo-minus" onClick={handleLess}>-</div>
                    <div className="productInfo-counter">{quantity}</div>
                    <div className="productInfo-plus" onClick={handlePlus}>+</div>
                </div>
            </div>
            <button onClick={handleAddProduct} 
            className="productInfo-btn">
                Add to car
            <i className='bx bxs-cart'></i>
            </button>
        </footer>
        </div>
        
    </article>
  )
}

export default ProductInfo