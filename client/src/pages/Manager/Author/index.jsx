import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Profile from '../profile';

function Author() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('https://reqres.in/api/users')
            .then((response) => setUsers(response.data.data))
            .catch((error) => console.log(error));
    }, []);
    console.log(users);
    return (
        <>
            <div className="list-user">
                {users.map((user) => (
                    <Profile key={user.id} user={user} />
                ))}
            </div>
        </>
    );
}

export default Author;
