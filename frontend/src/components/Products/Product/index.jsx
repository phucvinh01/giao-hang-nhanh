import React from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Rate, Button, message, Popconfirm } from 'antd';
const { Meta } = Card;
import './product.scss'
import formatCurrency from '../../../util/formatCurrency';
import _ from 'lodash'
import { deleteProduct } from '../../../axios/ProductRequest';
import { toast } from 'react-toastify'

import { getProductList } from '../../../redux/api'
import { useDispatch, useSelector } from 'react-redux'
const Product = (props) => {

    const sumRating = _.sumBy(props.reviews && props.reviews, 'rating')
    const avg = _.round(sumRating / (props.reviews && props.reviews.length))

    const dispatch = useDispatch()


    const handleDelete = async (id) => {
        console.log(id);
        let res = await deleteProduct(id)
        if (res.success) {
            toast.success("Deleted.......")
            getProductList(dispatch);
        }
        else {
            toast.error("Delete failed.......")
        }
    }

    return (
        <>
            <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                <Card
                    bordered={ false }
                    className='position-relative card'
                    hoverable
                    style={ {
                        width: 240,
                    } }
                    cover={ <img alt="example" src={ props?.img } style={ { height: "200px" } } /> }

                    actions={ props?.user?.role === 1 && [
                        <Popconfirm
                            title={ "Delete " + props.name }
                            description="Are you sure to delete this?"
                            onConfirm={ handleDelete(props._id) }
                            okText="Yes"
                            cancelText="No"
                            okButtonProps={ { className: "btn btn-danger", type: "text" } }
                            cancelButtonProps={ { className: "btn btn-light", type: "text" } }
                        >
                            <DeleteOutlined key="delete" />
                        </Popconfirm>,

                        <EditOutlined key="edit" />
                    ] }

                >
                    <div className='card-content p-0 text-center'>
                        <p className=''>{ props?.brand }</p>
                        <p className='card-content__decsrciption'>{ props?.name }</p>
                        <p className='card-content__price'>{ formatCurrency.format(props?.price) }</p>
                        <div className='d-flex justify-content-center align-items-center gap-2'>
                            <Rate disabled value={ avg ? avg : 0 } />
                            <p>({ props.reviews && props.reviews.length })</p>
                        </div>
                    </div>
                    <button className='btn-quick'><span>XEM NHANH</span></button>
                </Card>
            </div >

        </>
    )
}

export default Product