import React from 'react'
import Products from '../components/Products'
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
const Product = () => {
    return (
        <>
            <div className='container'>
                <div className='d-flex gap-3' style={ { height: "40px" } }>
                    <Link to={ '/' } className='text-dark'>Home</Link>
                    <span>&gt;</span>
                    <p className='text-muted'>Product</p>
                </div>

                <div className='row'>
                    <div className='col-2'>

                    </div>
                    <div className='col-10'>
                        <Products />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Product