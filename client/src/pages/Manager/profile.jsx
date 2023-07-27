import React from 'react';
import './style.scss';
function Profile(props) {
    const { id, email, firstName, lastName, avatarLink } = props.user;

    return (
        <div/>
        // <div className="user-profile">
        //     <img src={avatarLink} alt="Avatar" />
        //     <div className="user-info">
        //         <h3>
        //             {firstName} {lastName}
        //         </h3>
        //         <p>ID: {id}</p>
        //         <p>Email: {email}</p>
        //     </div>
        // </div>
    );
}

export default Profile;
