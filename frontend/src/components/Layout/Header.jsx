import React, { useEffect, useState } from 'react';
import { Link, NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import LoginPopup from '../LoginPopup';
import { useDispatch, useSelector } from 'react-redux';
import { Popover, Badge, Button } from 'antd';
import './header.scss';
import { logout } from '../../redux/api';
import SearchBox from '../Searchbox';
import DrawerCart from '../DrawerCart';
import NavbarMobie from '../NavbarMobie';
const Header = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const cart = useSelector((state) => state.cart.cart.data);
    const [users, setUsers] = useState('');
    const [hideCart, setHideCart] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const accessToken = user?.accessToken;
    const id = user?._id;

    useEffect(() => {
        let path = location.pathname;
        if (path.includes('/checkout')) {
            setHideCart(true)
        }
    }, [location]);

    useEffect(() => {
        setUsers(user);
    }, [users]);

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const handleLogOut = () => {
        logout(dispatch, id, navigate, accessToken);
    };

    const content = (
        <div>
            <button
                className='btn btn-dark'
                onClick={ handleLogOut }>
                Log out
            </button>
            <button className='btn btn-light'>
                <Link to={ '/me/order' }>Order</Link>
            </button>
        </div>
    );
    return (
        <>
            <header className='sticky-sm-top sticky-top header bg-white mt-3'>
                <div className='container-fluid'>
                    <div className='row pt-1'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className=' col-lg-2 col-md-5 col-sm-5'>
                                <img
                                    className='w-100'
                                    src='https://th.bing.com/th/id/R.4ef21f9876d4988ee1e382d780a92ffb?rik=eHvz6%2bhQOCiadA&pid=ImgRaw&r=0'></img>
                            </div>
                            <div className='col-lg-6 hidden-sm'>
                                <SearchBox />
                            </div>
                            <div className='col-lg-2 hidden-sm'>
                                <div className='d-flex gap-0 justify-content-end gap-1'>
                                    { user ? (
                                        <Popover
                                            content={ content }
                                            placement='bottom'
                                            trigger='hover'>
                                            <button className='btn btn-light' type='text'>{ user.username }</button>
                                        </Popover>
                                    ) : (
                                        <LoginPopup />
                                    ) }
                                    <div hidden={ hideCart ? true : false }>
                                        <Badge count={ cart?.items?.length } size='small'>
                                            <button

                                                className='btn'
                                                type='link'
                                                title='cart'
                                                to={ '/cart' }
                                                onClick={ showDrawer }>
                                                <span>
                                                    <i className='fa-solid fa-bag-shopping text-dark fs-5'></i>
                                                </span>
                                            </button>
                                        </Badge>
                                    </div>


                                </div>
                            </div>
                            <div className='col-2 d-lg-none block-sm'>
                                <NavbarMobie />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <DrawerCart
                showDrawer={ showDrawer }
                onClose={ onClose }
                open={ open }
            />

        </>
    );
};

export default Header;
