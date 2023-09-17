import React from 'react'
import { Col, Typography } from 'antd'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    return (
        <div style={ { backgroundColor: "blueviolet" } }>
            <div className='vh-100 p-3'>
                <Typography.Title level={ 3 } >
                    Admin Panel
                </Typography.Title>
                <hr></hr>
                <div className='mt-3'>
                    <div className='mb-3 mx-1 fs-5'>
                        <NavLink to={ '/admin/product' } className='mb-3 d-flex align-items-center gap-2 text-white'>
                            <i className="fa-solid fa-shop" style={ { marginRight: 10 } }></i>
                            <strong>Product</strong>
                        </NavLink>
                    </div>
                    <div className='mb-3 mx-1 fs-5'>
                        <NavLink to={ '/admin/order' } className='mb-3 d-flex align-items-center gap-2 text-white'>
                            <i className="fa-solid fa-cart-flatbed" style={ { marginRight: 10 } }></i>
                            <strong>Order</strong>
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SideBar