import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Nav from '../Nav'

const SideBar = (props) => {
    const { handleLogOut, user } = props
    return (
        <div className="p-0">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-12 col-xl-12 px-sm-6 px-0 bg-light ">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <NavLink href="/admin" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <img src='https://i.pinimg.com/564x/85/85/f2/8585f2abc062ac1383bfc210a10bbda1.jpg'
                                className='w-50 m-auto'
                            ></img>
                        </NavLink>
                        <Nav />
                        <hr></hr>
                        <div className="dropdown w-100">
                            <button className="text-center text-white text-decoration-none btn btn-dark w-100" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                { user && user.username }
                            </button>
                            <ul className="dropdown-menu dropdown-menu-ligth text-small shadow">
                                <li>
                                    <hr className="dropdown-divider"></hr>
                                </li>
                                <li><button className="btn btn-dark dropdown-item" onClick={ handleLogOut }><i className="fa-solid fa-arrow-right-from-bracket"></i> Sign out</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar