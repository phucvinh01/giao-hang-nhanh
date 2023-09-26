import React from 'react'
import './DrawerCart.scss'
import { Button, Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons'
import { Divider } from 'antd'
import { useSelector } from 'react-redux';
import formatCurrency from '../../util/formatCurrency'
const DrawerCart = (props) => {

    const user = useSelector((state) => state.auth.login.currentUser);
    const cart = useSelector((state) => state.cart.cart.data);

    const { onClose, open } = props


    const Footer = () => {
        return (
            <>
                <div className='dawer-cart__footer'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p>Tổng</p>
                        {
                            cart?.items?.length > 0 ? <p>{formatCurrency.format(cart.subTotal)}</p> : <p>0</p>
                        }
                    </div>
                    <button className='btn w-100'>
                        Tiếp tục với hình hình thức mua hàng
                    </button>
                </div>
            </>
        )
    }

    return (
        <>
            <Drawer footer={<Footer />} placement="right" onClose={onClose} open={open} className='drawer-cart' zIndex={1040} closeIcon={false}>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0'>Giỏ hàng của tôi</p>
                    <button className='btn ' onClick={onClose}><span><CloseOutlined /></span></button>
                </div>
                <hr></hr>
                <div>
                    {cart && cart?.items?.length > 0 && cart.items.map((item) => {
                        return (
                            <>
                                <div className='d-flex'>
                                    <img src={item.img} width={80} alt={item.img}></img>
                                    <div>
                                        <p>{item.price}</p>
                                        <p>{item.quantity}</p>
                                    </div>

                                </div>
                            </>
                        )
                    })}
                </div>
            </Drawer>
        </>
    )
}

export default DrawerCart