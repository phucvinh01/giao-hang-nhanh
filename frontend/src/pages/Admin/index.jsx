import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Row, Col } from 'antd'
import SideBar from './SideBar'

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/api';
import { getProducts } from '../../axios/ProductRequest';
const Admin = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    /////////////////////////////////////////


    const get = async () => {
        let res = await getProducts()
        console.log(res);
    }

    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [user])

    useEffect(() => {
        get();
    }, [products])





    const accessToken = user?.accessToken;
    const id = user?._id;

    const handleLogOut = () => {
        logout(dispatch, id, navigate, accessToken)
    }
    return (
        <Row>
            <Col span={ 4 }>
                <SideBar handleLogOut={ handleLogOut }
                    user={ user }
                />
            </Col>
            <Col span={ 20 }><Outlet /></Col>
        </Row>
    )
}

export default Admin