import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from '../axios/Axios'
import { useSelector } from 'react-redux';
import moment from 'moment';

const Order = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const [orders, setOrders] = useState([])


    const navigate = useNavigate()
    const getById = async (id) => {
        let res = await Axios.get(`http://127.0.0.1:8000/v1/order/${id}`)
        if (res) {
            setOrders(res.data)
        }
    }

    console.log(orders);

    useEffect(() => {
        getById(user._id)
    }, [])

    return (
        <div className='container vh-100 p-5'>
            <button onClick={ () => navigate('/') } className='btn btn-dark'>Back</button>
            <>
                <h2>Danh sách các đơn đặt hàng</h2>

                <div className='container'>
                    <div className='row p-3 mb-3'>
                        <div className='col-2'><small>Mã đơn hàng:</small></div>
                        <div className='col-1'>
                            <small>Thời gian đặt hàng</small>
                        </div>
                        <div className='col-4'>
                            <small>Thông tin vận chuyển</small>
                        </div>
                        <div className='col-3'>
                            <small>Sản phẩm</small>
                        </div>
                        <div className='col-1'>
                            <small>Hình thức</small>
                        </div>
                        <div className='col-1'>
                            <p>Trạng thái</p>
                        </div>
                    </div>
                    {
                        orders && orders.map((item) => {
                            return (
                                <>
                                    <div key={ item.id } className='border-3 rounded-1 p-3 mb-3' >
                                        <div className='row'>
                                            <div className='col-2'>
                                                <small style={ {
                                                    fontSize: 12
                                                } }>{ item._id }</small>
                                            </div>
                                            <div className='col-1'>
                                                <small style={ {
                                                    fontSize: 12
                                                } }>{ moment(item.createdAt).format('MM/DD/YYYY') }</small>
                                            </div>
                                            <div className='col-4'>
                                                <p style={ {
                                                    fontSize: 12
                                                } } className='m-0'>{ item.shippingInfor[0]?.name }</p>
                                                <p style={ {
                                                    fontSize: 12
                                                } } className='m-0'>{ item.shippingInfor[0]?.phone }</p>
                                                <p style={ {
                                                    fontSize: 12
                                                } } className='m-0'>{ item.shippingInfor[0]?.address }</p>
                                            </div>
                                            <div className='col-3'>
                                                {
                                                    item.cart?.map((itemCart) => {
                                                        return (
                                                            <>
                                                                <div className='d-flex gap-3'>
                                                                    <img src={ itemCart.img } width={ 40 }></img>
                                                                    <div>
                                                                        <small style={ {
                                                                            fontSize: 12
                                                                        } }> { itemCart.name }</small>
                                                                        <small style={ {
                                                                            fontSize: 12
                                                                        } }>{ itemCart.quantity } </small>
                                                                    </div>
                                                                </div>

                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='col-1'>
                                                <small style={ {
                                                    fontSize: 12
                                                } }>COD</small>
                                            </div>
                                            <div className='col-1'>
                                                <p>{ item.status }</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </>
        </div>
    )
}

export default Order