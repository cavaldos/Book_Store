import React from 'react';
import {CloseOutlined } from "@ant-design/icons"; //CloseCircleOutlined
import { CloseCircleFilled } from "@ant-design/icons"; //CloseCircleOutlined
import { useNavigate } from "react-router-dom";
function Closebutton() {
    const history = useNavigate();
    return (
      <>
        <div className="close-auth">
          
          <CloseOutlined
            className="close-auth-icon"
            onClick={() => history(-1)}
          />
        </div>
      </>
    );
}

export default Closebutton;