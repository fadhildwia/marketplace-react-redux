import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ProductComponent } from '../components/ProductComponent'
import { fetchDataRequest } from '../redux/middlewares/sagas/productSagas'

const ProductListing: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // fetchProducts()
    dispatch(fetchDataRequest())
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