import React, { useState } from 'react'
import './Fields.css'

const Fields = ({ setProductData }) => {
  const [products, setProducts] = useState({
    product_id: 0,
    price: 0,
    product_name: '',
    category: ''
  })

  const inputChangeHandler = (field, value) => {
    setProducts((previousState) => {
      return {
        ...previousState,
        [field]: value
      }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const storedProducts = JSON.parse(localStorage.getItem('productItems')) || []

    storedProducts.push(products)
    setProductData(storedProducts)
    localStorage.setItem('productItems', JSON.stringify([...storedProducts]))

  }


  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="productid">Product ID</label>
          <input
            type="number"
            id='productid'
            value={products.product_id}
            onChange={(e) => { inputChangeHandler('product_id', e.target.value) }}
          />
        </div>
        <div>
          <label htmlFor="price">Selling Price</label>
          <input
            type="number"
            id='price'
            value={products.price}
            onChange={(e) => { inputChangeHandler('price', e.target.value) }}
          />
        </div>
        <div>
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id='product-name'
            value={products.product_name}
            onChange={(e) => { inputChangeHandler('product_name', e.target.value) }}
          />
        </div>
        <div>
          <label htmlFor="category">Choose a Category</label>
          <select id='category' onChange={(e) => { inputChangeHandler('category', e.target.value) }}>
            <option value=''>Choose category</option>
            <option value='electronic'>Electronic Items</option>
            <option value='skin-care'>Skin Care</option>
            <option value='food-items'>Food Items</option>
          </select>
        </div>

        <button type='submit' className='add-btn'>Add Product</button>
      </form>
    </>
  )
}

export default Fields
