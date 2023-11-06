import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ProductComponent } from '../components/ProductComponent'
import { getProductRequest } from '../redux/actions/productAction'

const ProductListing: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductRequest())
  }, [])

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export { ProductListing }