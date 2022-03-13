import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { ProductComponent } from './ProductComponent'
import { setProducts } from '../redux/actions/productAction'

const ProductListing: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetchProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchProducts = async () => {
    await axios.get('https://fakestoreapi.com/products')
      .then(({ data }) => {
        dispatch(setProducts(data))
      })
  }

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export { ProductListing }