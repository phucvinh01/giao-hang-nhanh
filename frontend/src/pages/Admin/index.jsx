import React from 'react'
import { Outlet } from 'react-router-dom'
import { Row, Col } from 'antd'
import SideBar from './SideBar'
const Admin = () => {
    return (
        <Row>
            <Col span={ 4 }><SideBar /></Col>
            <Col span={ 20 }><Outlet /></Col>
        </Row>
    )
}

export default Admin