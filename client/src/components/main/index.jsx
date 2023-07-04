import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { useState } from 'react';
import Home from '../../pages/Home';
import Menus from '../layout/menu/index';
const style = {
    sidebar: { color: 'white', background: '#010512' },
    header: {

        padding: 0,
        background: '#fefeff',
    
    },
    button: { fontSize: '16px', width: 64, height: 64 },
    logo: {
        backgroundColor: '#323440',
        height: '64px',
        textAlign: 'center',
        lineHeight: '64px',
        padding: '0',
    },
    contents: {
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        background: 'var(--white-color)',
        borderRadius: '10px',
    },
    test: {
        backgroundColor: 'red',
        margin: '24px 16px',
    },
};

const { Header, Sider, Content } = Layout;
const DefaultLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout>
            <Sider
                style={style.sidebar}
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <div className="logo" style={style.logo}>
                    <h1> Book Store </h1>
                </div>
                <div className="demo-logo-vertical" />
                <Menus />
            </Sider>
            <Layout>
                <Header style={style.header}>
                    <Button
                        style={style.button}
                        type="text"
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                    />
                </Header>
                <Content style={style.contents}>
                    {window.location.pathname === '/' ? (
                        <>
                            <Home />
                        </>
                    ) : (
                        <>{children}</>
                    )}
                </Content>
            </Layout>
        </Layout>
    );
};
export default DefaultLayout;
