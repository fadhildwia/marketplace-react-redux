import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ProductComponent } from './ProductComponent'
import { setProducts } from '../redux/actions/productAction'

const ProductListing: React.FC = () => {
  const dispatch = useDispatch()

  const products = useSelector((state: any) => state.allProducts.products)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    await axios.get('https://fakestoreapi.com/products')
      .then(({ data }) => {
        dispatch(setProducts(data))
      })
  }

  return (
    <div className='ui grid container'>
      <h1>Product Listing</h1>
      <ProductComponent />
    </div>
  )
}

export { ProductListing }