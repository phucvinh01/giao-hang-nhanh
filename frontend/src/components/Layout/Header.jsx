import React, { useEffect, useState } from 'react';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import LoginPopup from '../LoginPopup';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Popover } from 'antd';
import './header.css'
import { logout } from '../../redux/api';
const Header = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const [users, setUsers] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const accessToken = user?.accessToken;
    const id = user?._id;

    useEffect(() => {
        setUsers(user)
    }, [users])


    const handleLogOut = () => {
        logout(dispatch, id, navigate, accessToken)
    }

    const content = (
        <div>
            <button className='header-logout' onClick={ handleLogOut }>Logout</button>
        </div>
    )
    return (
        <header className='sticky-sm-top sticky-top header px-3 bg-white'>
            <div className='container-fluid'>
                <div className='row pt-1'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='logo col-lg-2 col-md-5 col-sm-5'>
                            <img
                                className=''
                                style={ { width: '60px' } }
                                src='https://i.pinimg.com/564x/85/85/f2/8585f2abc062ac1383bfc210a10bbda1.jpg'></img>
                        </div>
                        <div className='col-lg-8  navbar-reponsive'>
                            <nav className='navbar navbar-expand-lg'>
                                <div className='container-fluid'>
                                    <div
                                        className='collapse navbar-collapse'
                                        id='navbarSupportedContent'>
                                        <ul className='navbar-nav me-auto mb-2 mb-lg-0  mx-auto'>
                                            <li className='nav-item px-3'>
                                                <NavLink
                                                    className='nav-link fs-20'
                                                    aria-current='page'
                                                    to={ '/' }>
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li className='nav-item px-3'>
                                                <NavLink
                                                    className='nav-link fs-20'
                                                    to={ '/product' }>
                                                    Product
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className='col-lg-2 '>
                            <div className='d-flex gap-0 justify-content-end'>
                                { user ? (
                                    <Popover
                                        content={ content }
                                        placement="bottom"
                                        trigger='hover'>
                                        <button className='header-avatar'>{ user.username }</button>
                                    </Popover>
                                ) : (
                                    <LoginPopup />
                                ) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
