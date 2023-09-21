import React from 'react'
import SearchBox from '../components/Searchbox'
import Slide from '../components/Slider'
import BrandSlider from '../components/BrandSlider'
import SlideNewProduct from '../components/SlideNewProduct'

const Home = () => {
    return (
        <>
            <main className='container-fluid px-5 mt-3'>
                {/* banener */}
                <section className='mb-3'>
                    <div className='row'>
                        <div className='col-8'>
                            <Slide />
                        </div>
                        <div className='col-4'>
                            <div className='mb-2 rounded'>
                                <img className='rounded w-100' src='https://image.hsv-tech.io/1920x0/bbx/common/63f285de-8b04-4ff7-b7ee-820cbd34db9a.webp' ></img>
                            </div>
                            <div className='rounded'>
                                <img className='rounded w-100' src='https://image.hsv-tech.io/1920x0/bbx/common/7ab1f99c-cc2c-4550-ab59-8ba90fecdf6f.webp' ></img>
                            </div>
                        </div>
                    </div>
                </section>
                {/* brand */}
                <section className='mb-4'>
                    <BrandSlider />
                </section>

                <section>
                    <h2 className='text-center mb-3'>TOP SẢN PHẨM MỚI</h2>
                    <SlideNewProduct />
                </section>
            </main>
        </>
    )
}

export default Home