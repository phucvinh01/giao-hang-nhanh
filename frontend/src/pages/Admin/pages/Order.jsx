import React, { useEffect, useState } from 'react'
import Axios from '../../../axios/Axios'
import moment from 'moment';
const Order = () => {

    const [orders, setOrders] = useState([]);

    const [preparing, setPreparing] = useState(false)
    const [now, setNow] = useState(false)

    const day = new Date();
    let toDay = day.toLocaleDateString()

    const getOrder = async () => {
        let res = await Axios.get('http://127.0.0.1:8000/v1/order/');
        if (res) {
            setOrders(res.data)
        }
    }
    useEffect(() => {
        getOrder()
    }, [])


    const checkToday = (dayOrder, toDay) => {
        if (moment(dayOrder).format('MM/DD/YYYY') === moment(toDay).format('MM/DD/YYYY')) {
            return true
        }
        return false
    }

    return (
        <>
            <main style={ { marginTop: "58px", minHeight: "100vh" } }>
                <div className="container pt-4">
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
                                <p>Status</p>
                            </div>
                        </div>
                        {
                            orders && orders.length > 0 && orders.map((item) => {
                                return (
                                    <>
                                        <div key={ item.id } className='border-3 rounded-1 p-3 mb-3' style={ checkToday(item.createdAt, toDay) ? { backgroundColor: 'lightgray' } : { backgroundColor: "transparent" } }>
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
                                                    <button className='btn btn-info' onClick={ () => setPreparing(!preparing) } key={ item._id }>{ preparing ? "Xác nhận" : "Done" }</button>

                                                </div>
                                            </div>
                                        </div >
                                    </>
                                )
                            })
                        }
                    </div>

                </div>
            </main>
        </>
    )
}

export default Order