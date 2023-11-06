import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductComponent: React.FC = () => {
  const products = useSelector((state: any) => state.allProducts.data)
  const renderList: JSX.IntrinsicElements = products.map((item: any) => {
    return(
      <div className='four wide column' key={item.id}>
        <Link to={`/product/${item.id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="content">
                <div className="header">{item.title}</div>
                <div className="meta price">{item.price}</div>
                <div className="meta">{item.category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  })

  return (
    <>
      {renderList}
    </>
  )
}

export { ProductComponent }