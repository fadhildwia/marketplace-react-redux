import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { ProductComponent } from '../components/ProductComponent'
import { setProducts } from '../redux/actions/productAction'
import { fetchProduct } from '../redux/middlewares/thunks/productThunk'

const ProductListing: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // fetchProducts()
    dispatch(fetchProduct())
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