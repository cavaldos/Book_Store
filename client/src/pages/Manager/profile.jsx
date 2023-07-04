import React from 'react';

import { Form } from 'antd';
import './style.scss';
function Profile(props) {
    const { id, name, image, username, password, email } = props;
    return (
        <>
            <div className="profile">
                <div className="profile__image"></div>
                <div className="content">
                
                    <Form />
                </div>
            </div>
        </>
    );
}

export default Profile;
