import React, { useEffect, useState } from 'react'
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    ShoppingCartOutlined,
    CodeSandboxOutlined
} from '@ant-design/icons';
import { useLocation, useHistory } from 'react-router-dom'

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {
    RiDashboardLine,
    RiErrorWarningLine
} from 'react-icons/ri'

import {
    FaRegCheckCircle
} from 'react-icons/fa'

import {
    FiSettings
} from 'react-icons/fi'

import {
    CgCap
} from 'react-icons/cg'


import {
    BiChart,
    BiLock
} from 'react-icons/bi'

import {
    BsBarChart
} from 'react-icons/bs'

import {
    HiOutlineClipboardCheck,
    HiOutlinePhone,
    HiOutlineUser
} from 'react-icons/hi'

const { SubMenu } = Menu;

function SidebarContent(props) {
    const location = useLocation();
    let history = useHistory();
    const [collapsed, setCollapsed] = useState(false)
    const [selectedLocation, setSelectedLocation] = useState('/')
    const [selectedSubKey, setSelectedSubkey] = useState([])


    useEffect(() => {
        var str = location.pathname
        str = str.substring(1);
        setSelectedLocation(str)
        // setSelectedSubkey(str.split('/')[0])

    }, [location.pathname])


    return (
        <div style={{ width: "100%", marginTop: 20 }}>
            <Menu
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                // theme="dark"
                // openKeys={selectedSubKey}
                mode="inline"
                inlineCollapsed={collapsed}
                selectedKeys={[
                    selectedLocation
                ]}
                onSelect={({ item, key }) => { history.push(`/${key}`) }}
            >
                <Menu.Item key="dashboard">
                    <RiDashboardLine size={18} style={{ margin: "0px 10px -3px 0px" }} /> Dashboard
                </Menu.Item>
                <Menu.Item key="pos">
                    <FaRegCheckCircle size={16} style={{ margin: "0px 10px -3px 0px" }} /> Pos
                </Menu.Item>
                <Menu.Item key="dine">
                    <CgCap size={16} style={{ margin: "0px 10px -2px 0px" }} /> Dine
                </Menu.Item>
                <Menu.Item key="kds">
                    <RiErrorWarningLine size={18} style={{ margin: "0px 10px -3px 0px" }} />  Kds
                </Menu.Item>
                <SubMenu key="sales" icon={<ShoppingCartOutlined style={{ fontSize: '18px', marginRight: "12px" }} />} title="Sales">
                    <Menu.Item key="sales/invoices">Invoices</Menu.Item>
                    <Menu.Item key="sales/orders">Orders</Menu.Item>
                </SubMenu>
                {/* <Menu.Item key="reporting">
                    <BiChart size={18} style={{ margin: "0px 10px -3px 0px" }} /> Reporting
                </Menu.Item> */}
                <SubMenu key="reporting" icon={<BiChart style={{ fontSize: '18px', marginRight: "12px" }} />} title="Reporting">
                    <Menu.Item key="reporting/sales">Sales</Menu.Item>
                    <Menu.Item key="reporting/products">Products</Menu.Item>
                    <Menu.Item key="reporting/materials">Materials</Menu.Item>
                    <Menu.Item key="reporting/orders">Orders</Menu.Item>
                    <Menu.Item key="reporting/charts">Charts</Menu.Item>
                </SubMenu>
                <Menu.Item key="reporting-kpi">
                    <BsBarChart size={16} style={{ margin: "0px 10px -3px 0px" }} /> Reporting KPI
                    </Menu.Item>
                <SubMenu key="products" icon={<CodeSandboxOutlined style={{ fontSize: '18px', marginRight: "12px" }} />} title="Products">
                    <Menu.Item key="products/products">Products</Menu.Item>
                    <Menu.Item key="products/add-on">Add On</Menu.Item>
                    <Menu.Item key="products/categories">Categories</Menu.Item>
                    <Menu.Item key="products/materials">Materials</Menu.Item>
                </SubMenu>
                <Menu.Item key="inventory">
                    <HiOutlineClipboardCheck size={18} style={{ margin: "0px 10px -3px 0px" }} /> Inventry
                </Menu.Item>
                <Menu.Item key="suppliers">
                    <HiOutlinePhone size={18} style={{ margin: "0px 10px -3px 0px" }} /> Suppliers
                </Menu.Item>
                <Menu.Item key="users">
                    <HiOutlineUser size={18} style={{ margin: "0px 10px -3px 0px" }} /> Users
                </Menu.Item>
                <Menu.Item key="config">
                    <FiSettings size={16} style={{ margin: "0px 10px -3px 0px" }} /> Config
                </Menu.Item>
                <Menu.Item key="auth">
                    <BiLock size={18} style={{ margin: "0px 10px -3px 0px" }} /> Auth
                </Menu.Item>
            </Menu>
        </div>
    );
}


export default SidebarContent
