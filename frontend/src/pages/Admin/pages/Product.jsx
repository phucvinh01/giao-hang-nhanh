import React, { useEffect, useState } from 'react';
import PopupCreate from '../PopupCreate';
import Products from '../../../components/Products';


const ProductAdmin = () => {
    return (
        <>
            <main style={ { marginTop: "58px", minHeight: "100vh" } }>
                <div class="container pt-4">
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-6 text-end mb-3' >
                            <PopupCreate />
                        </div>
                    </div>
                    <Products />
                </div>
            </main>
        </>
    );
};

export default ProductAdmin;
