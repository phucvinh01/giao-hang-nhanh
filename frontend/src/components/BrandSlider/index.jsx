import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { getBrand } from '../../axios/BrandRequest';
import './brandSilder.scss'
const BrandSlider = () => {

    const [brands, setBrands] = useState([]);

    const getBrands = async () => {
        let res = await getBrand();
        if (res) {
            setBrands(res);
        }
    }

    useEffect(() => {
        getBrands()
    }, [])

    const settings = {
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        speed: 1000,
        cssEase: "linear",
    };

    return (
        <div className='mb-3'>
            <div className='brand-slide'>
                <Slider {...settings}>
                    {
                        brands?.length > 0 && brands.map((item) => {
                            return (
                                <div className='slide-brand-item'>
                                    <img src={item.logo}></img>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default BrandSlider