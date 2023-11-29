import React, { useEffect, useState } from 'react'
import Fields from "../../components/Fields";
import './Home.css';

const Home = () => {
    const [productData, setProductData] = useState([])


    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('productItems'))

        setProductData(storedData)
    }, [])

    // const deleteHandler = (id) => {}
    const deleteHandler = (id) => {
        const storedData = JSON.parse(localStorage.getItem('productItems'))
        const filteredData = storedData.filter((product) => product.product_id !== id)
        setProductData(filteredData)
        localStorage.setItem('productItems', JSON.stringify([...filteredData]));
    }

    return (
        <>
            <Fields setProductData={setProductData} />

            <div className='electroninc-item-container'>
                <h3>Electronic Items</h3>
                <ul>
                    {productData?.map((product) => (
                        <>
                            {product.category === 'electronic' && (
                                <li key={product.product_id}>
                                    <span>{product.product_name}</span>
                                    <span>{product.price}</span>
                                    <button onClick={() => { deleteHandler(product.product_id) }}>Delete</button>
                                </li>
                            )}
                        </>
                    ))}

                </ul>
            </div>
            <div className='skin-item-container'>
                <h3>Skin Care</h3>
                <ul>
                    {productData?.map((product) => (
                        <>
                            {product.category === 'skin-care' && (
                                <li key={product.product_id}>
                                    <span>{product.product_name}</span>
                                    <span>{product.price}</span>
                                    <button onClick={() => { deleteHandler(product.product_id) }}>Delete</button>
                                </li>
                            )}

                        </>
                    ))}
                </ul>
            </div>
            <div className='food-item-container'>
                <h3>Food Items</h3>
                <ul>
                    {productData?.map((product) => (
                        <>
                            {product.category === 'food-items' && (
                                <li key={product.product_id}>
                                    <span>{product.product_name}</span>
                                    <span>{product.price}</span>
                                    <button onClick={() => { deleteHandler(product.product_id) }}>Delete</button>
                                </li>
                            )}

                        </>
                    ))}
                </ul>
            </div>


        </>
    )
}

export default Home;
