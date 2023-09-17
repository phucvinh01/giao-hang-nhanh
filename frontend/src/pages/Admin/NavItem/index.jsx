import React from 'react'
import { NavLink } from 'react-router-dom'
import './navitem.css'
const NavItem = ({ icon, title, href }) => {
    return (
        <>
            <li className='mx-auto'>
                <NavLink to={ href && href } className="nav-link mx-0 w-100 align-middle text-dark">
                    { icon && <i className={ icon }></i> } <span className="ms-1 d-none d-sm-inline">{ title && title }</span>
                </NavLink>
            </li>
        </>
    )
}

export default NavItem