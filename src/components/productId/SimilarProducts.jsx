import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductsCard from '../home/ProductsCard'
import "./styles/SimilarProducts.css"

const SimilarProducts = ({product,categories}) => {
    const [productsByCategory, setProductsByCategory] = useState([])

    useEffect(() => {
        if(categories&&product){
            const category=categories.filter(category=>category.name===product.category)
      const URL=`https://e-commerce-api.academlo.tech/api/v1/products?category=${category[0].id}`
      console.log(URL)
      axios.get(URL)
   .then(res=>{
    const productsFilter=res.data.data.products.filter(productCategory=>productCategory.id!==product.id)
    setProductsByCategory(productsFilter)
   })
   .catch(err=>console.log(err))
        }
    }, [categories,product])
    
    
  return (
    <section className='similarProducts'>
        {
            productsByCategory.map(productsByCategory=><ProductsCard product={productsByCategory}
            key={productsByCategory.id}/>)
        }
    </section>
  )
}

export default SimilarProducts