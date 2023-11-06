/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailProduct } from '../redux/middlewares/thunks/productThunks'

const ProductDetail: React.FC = () => {
  const params = useParams()
  const dispatch = useDispatch()

  const product = useSelector((state: any) => state.productDetails)

  useEffect(() => {
    if (params.productId) {
      dispatch(getDetailProduct(params.productId))
    }
  }, [params.productId])

  return (
    <div className="ui grid container">
      {product.loading ? (
        <div>Loading...</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={product.data.image} />
              </div>
              <div className="column rp">
                <h1>{product.data.title}</h1>
                <h2>
                  <a className="ui teal tag label">$ {product.data.price}</a>
                </h2>
                <h3 className="ui brown block header">{product.data.category}</h3>
                <p>{product.data.description}</p>
                <div className="ui vertical animated button">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export { ProductDetail }