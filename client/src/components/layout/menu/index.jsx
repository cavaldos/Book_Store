import React from 'react';
import { Menu } from 'antd';
import {
    MenuFoldOutlined,
    // UserOutlined,
    MenuUnfoldOutlined,
    //
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function getItem(label, key, icon, children, type, onClick) {
    return {
        key,
        icon,
        children,
        label,
        type,
        onClick,
    };
}
const style = {
    menu: {},
};
function Menus() {
    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
    };
    return (
        <>
            <Menu
                style={style.menu}
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                // items={items}
                items={[
                    getItem(
                        'Home',
                        '1',
                        <MenuUnfoldOutlined />,
                        null,
                        'items',
                        () => {
                            handleClick('/');
                        },
                    ),
                    getItem('Manger', 'sub1', <MenuUnfoldOutlined />, [
                        getItem(
                            'User',
                            '2',
                            <MenuUnfoldOutlined />,
                            null,
                            'item',
                            () => {
                                handleClick('/manager-user');
                            },
                        ),
                        getItem(
                            'Author',
                            '3',
                            <MenuUnfoldOutlined />,
                            null,
                            'item',
                            () => {
                                handleClick('/manager-author');
                            },
                        ),
                    ]),
                    getItem(
                        'Wallet',
                        '4',
                        <MenuUnfoldOutlined />,
                        null,
                        'item',
                        () => {
                            handleClick('/wallet');
                        },
                    ),
                    getItem(
                        'Revenue',
                        '5',
                        <MenuUnfoldOutlined />,
                        null,
                        'item',
                        () => {
                            handleClick('/revenue');
                        },
                    ),
                    getItem(
                        'Cart',
                        '6',
                        <MenuUnfoldOutlined />,
                        null,
                        'item',
                        () => {
                            handleClick('/cart');
                        },
                    ),
                ]}
            />
        </>
    );
}

export default Menus;
