import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getProductByCategory } from '../axios/ProductRequest';
import { useSelector } from 'react-redux';
import Products from '../components/Products'

const Category = () => {

    const [products, setProducts] = useState([]);

    let path = useParams();
    const user = useSelector((state) => state.auth.login.currentUser);

    const getProducts = async (path) => {
        let res = await getProductByCategory(path.path)
        if (res) {
            setProducts(res)
        }
    }

    useEffect(() => {
        getProducts(path);
    }, [path])


    return (
        <>
            <div className='container '>
                <div className='d-flex gap-3' style={{ height: "40px" }}>
                    <Link to={'/'} className='text-dark'>Home</Link>
                    <span>&gt;</span>
                    <p className='text-muted'>Product</p>
                </div>

                <div className='row'>
                    <div className='col-2'>

                    </div>
                    <div className='col-10 vh-100'>
                        <Products products={products} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Category