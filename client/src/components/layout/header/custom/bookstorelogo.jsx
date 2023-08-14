import React from 'react';
import { Layout, Space } from 'antd';


const LogoBookStore = () => {
  return (
   
      <Space 
        id="logo-bookstore"
        style={{ 
            position: "absolute",
            right: "150px",
            top: '70%',
            bottom: '50%',
            display: "flex" ,
        }}>
        <img src="logo-bookstore.png" alt="Logo" style={{ height: '120px' , width:'200px'}} />
      </Space>
    
  );
};

export default LogoBookStore;
