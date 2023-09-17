import React from 'react'
import NavItem from '../NavItem'

const Nav = () => {
    return (
        <>
            <ul className="w-100 nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <NavItem
                    title={ "Product" }
                    icon={ 'fa-solid fa-store' }
                    href={ "/admin/product" }

                />
                <NavItem
                    title={ "Employees" }
                    icon={ 'fa-solid fa-user-group' }
                    href={ "/admin/employee" }

                />
                <NavItem
                    title={ "Orders" }
                    icon={ "fa-solid fa-truck-fast" }
                    href={ "/admin/order" }

                />
                <NavItem
                    title={ "Statistical" }
                    icon={ "fa-solid fa-file-import" }
                    href={ "/admin/sale" }

                />
            </ul>
        </>
    )
}

export default Nav