import React, { useEffect, useState } from 'react';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import LoginPopup from '../LoginPopup';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Popover } from 'antd';
import './header.scss'
import { logout } from '../../redux/api';
import SearchBox from '../Searchbox';
import { getCategory } from '../../axios/CategoryRequest'
const Header = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const [users, setUsers] = useState('');
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const accessToken = user?.accessToken;
    const id = user?._id;

    useEffect(() => {
        setUsers(user)
    }, [users])

    useEffect(() => {
        getCategories();
    }, [categories])

    const getCategories = async () => {
        let res = await getCategory();
        if (res) {
            setCategories(res)
        }
    }


    const handleLogOut = () => {
        logout(dispatch, id, navigate, accessToken)
    }

    const content = (
        <div>
            <button classNameName='header-logout' onClick={ handleLogOut }>Logout</button>
        </div>
    )
    return (
        <>
            <div className='header-menu bg-gradientt'>
                <div className='menu-content'>
                    <div className='menu-item'>100% Chính hãng</div>
                    <div className='separator'></div>
                    <div className='menu-item'>Giảm 120k cho đơn thành hàng từ 999k</div>
                    <div className='separator'></div>
                    <div className='menu-item'>Giá tốt nhất</div>
                    <div className='separator'></div>
                    <div className='menu-item'>Mua và nhận tại cửa hàng</div>

                </div>
            </div>
            <header className='sticky-sm-top sticky-top header px-3 bg-white'>

                <div className='container-fluid'>
                    <div className='row pt-1'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='logo col-lg-4 col-md-5 col-sm-5'>
                                <img src="https://image.hsv-tech.io/300x0/bbx/common/50a26167-9341-4be8-8aba-9682d3b4a916.webp"></img>
                            </div>
                            <div className='col-lg-6  navbar-reponsive'>
                                <SearchBox />
                            </div>
                            <div className='col-lg-2'>
                                <div className='d-flex gap-0 justify-content-end gap-1'>
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
                                    <button className='btn btn-dark'>
                                        <i className="fa-solid fa-bag-shopping text-light"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className='col-lg-12  navbar-reponsive mt-3'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0  mx-auto">
                                <li className="nav-item px-3">
                                    <NavLink className="btn border px-4 btn-category" to={ '/product' }>Tất cả sản phấm</NavLink>
                                </li>
                                <li className="nav-item px-3">
                                    <NavLink className="btn border px-4 btn-category" to={ '/brand' }>Brand</NavLink>
                                </li>
                                {
                                    categories && categories.length > 0 && categories.map((item) => {
                                        return (
                                            <>
                                                <li className="nav-item px-3">
                                                    <NavLink className="btn border px-4 btn-category" to={ '/category/' + item.name }>{ item.name }</NavLink>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
