import React from 'react';
import '../style.scss';
import Profile from '../profile';
function Author() {
    console.log('User');
    return (
        <>
            <div className="container-manager">
            author
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

export default Author;
