import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/home/Categories'
import ProductsCard from '../components/home/ProductsCard'
import { getAllProducts } from '../store/slices/products.slice'
import "./styles/Home.css"
const Home = () => {
  const [nameProduct, setnameProduct] = useState("")
  const [category, setCategory] = useState()
  const [filterProducts, setFilterProducts] = useState([])
  const products=useSelector(state=>state.products)
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()
    const newName= e.target.nameProduct.value
    setnameProduct(newName)
  }

  useEffect(() => {
    dispatch(getAllProducts())  
  }, [])

  useEffect(() => {
    setFilterProducts(products)
  }, [products])

  useEffect(() => {
    const newProducts=products.filter(product=>product.title.includes(nameProduct)&& (product.category.id===category || !category))
    setFilterProducts(newProducts)
  }, [nameProduct,category])
  
  
  
  return (
    <main className='home'>
      <form className='home-form' onSubmit={handleSubmit}>
        <div className='home-form-div'>
          <input className='home-input' type="text" id="nameProduct" placeholder='What are you looking for?'/>
          <button className='home-btn'><i className='bx bx-search'></i></button>
        </div>
      </form>
    <Categories setCategory={setCategory}/>
      <section className='home-container-products'>
        {
          filterProducts.map(product=><ProductsCard product={product} key={product.id}/>)
        }
      </section>
    </main>
  )
}

export default Home