import React from 'react';
import { Typography } from 'antd';
import PopupCreate from './PopupCreate';


const ProductAdmin = () => {
    const { Title } = Typography;
    return (
        <section className='p-3'>
            <Title level={ 3 }>
                <em>Product</em>
            </Title>
            <hr></hr>
            <div className='text-end mb-3' >
                <PopupCreate />
            </div>
            <div className='border-0'></div>
        </section>
    );
};

export default ProductAdmin;
