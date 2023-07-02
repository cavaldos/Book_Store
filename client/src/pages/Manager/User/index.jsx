import React from 'react';
import '../style.scss';
import Profile from '../profile';
function User() {
    console.log('User');
    return (
        <>
            <div className="container-manager">
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
