import React from 'react';
import { Image, Typography } from 'antd';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import './header.scss';
const Header = () => {
    const navigator = useNavigate();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    useEffect(() => {
        const sidebar = document.getElementById('sider');
        if (isSidebarOpen) {
            sidebar.classList.add('active');
        } else {
            sidebar.classList.remove('active');
        }
    }, [isSidebarOpen]);
    return (
        <>
            <div className="header">
                {/* toggle sidebar */}
                <div className="button">
                    <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <i className="fas fa-bars"></i>
                    </Button>
                </div>
                <Image
                    style={{ backgroundColor: 'white' }}
                    src="logo512.png"
                    alt="logo"
                    width={40}
                    height={40}
                />
                <Typography.Title
                    style={{
                        backgroundColor: 'white',
                        margin: '0px auto 0px 20px',
                    }}
                    level={3}
                    className="title"
                >
                    Book Store
                </Typography.Title>
                <Button
                    variant="contained"
                    onClick={() => navigator('/signin')}
                >
                    Login
                </Button>
            </div>
        </>
    );
};

export default Header;
