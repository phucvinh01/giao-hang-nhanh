import React from 'react'
import Slider from "react-slick";
const Banner2 = (props) => {

    const { data } = props

    const settings = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='position-relative'>
                <Slider {...settings}>
                    {
                        data && data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img className='w-100 rounded px-1' src={item}></img>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </>
    )
}

export default Banner2