import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux';

const Products = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const products = useSelector((state) => state.product.products.data);
    return (
        <>
            <div className='container '>
                <div className='row'>
                    {
                        products && products.length > 0 && products.map((product) => {
                            return (
                                <Product
                                    key={ product._id }
                                    { ...product }
                                    user={ user }
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Products