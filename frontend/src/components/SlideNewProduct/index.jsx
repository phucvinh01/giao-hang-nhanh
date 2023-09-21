import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import './SlideNewProduct.scss'
import { getListNewProduct } from '../../axios/ProductRequest';
import Product from '../../components/Products/Product'
import { useSelector } from 'react-redux';
import _ from 'lodash'

const SlideNewProduct = () => {


    const products = useSelector((state) => state.product.products.data);

    const data = products.slice(10);

    console.log(data);

    const settings = {
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        speed: 1000,
        cssEase: "linear"
    };
    return (
        <div className='slide-newproduct' >
            <Slider {...settings}>
                {
                    data?.length && data.map((item) => {
                        return (
                            <>
                                <Product
                                    key={item._id}
                                    {...item}
                                />
                            </>
                        )
                    })
                }
            </Slider>
        </div >
    )
}

export default SlideNewProduct