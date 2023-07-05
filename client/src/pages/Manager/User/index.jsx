import React from 'react';
import '../style.scss';
import Profile from '../profile';
import App from './drawer';
function User() {
    console.log('User');
    return (
        <>
            <div className="container-manager">
                <App />
                <div className="container-profile">
                    <Profile />
                </div>
                <div className="container-profile">
                    <Profile />
                </div>
                <div className="container-profile">
                    <Profile />
                </div>
                <div className="container-profile">
                    <Profile />
                </div>
            </div>
        </>
    );
}

export default User;
