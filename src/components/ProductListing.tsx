import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ProductComponent } from './ProductComponent'
import { fetchProducts } from '../redux/actions/productAction'

const ProductListing: React.FC = () => {
  const dispatch = useDispatch()

  const products = useSelector((state) => state)

  useEffect(() => {
    dispatch(fetchProducts())
    console.log(products)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const fetchProducts = async () => {
  //   await axios.get('https://fakestoreapi.com/products')
  //     .then(({ data }) => {
  //       dispatch(setProducts(data))
  //     })
  // }

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export { ProductListing }