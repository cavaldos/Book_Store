import React, { Component, useState } from 'react';
import UserList from '../../../components/user/user-list.component';
import Button from '@mui/material/Button';
import AddUser from '../../../components/user/add-user.component';



export default function User(){
    const [showAddUser, setShowAddUser] = useState(false);

  const handleAddUserClick = () => {
    setShowAddUser(true);
  };

  const handleAddUserClose = () => {
    setShowAddUser(false);
  };

  if (showAddUser) {
    return(
        <AddUser onClose={handleAddUserClose} />
    )
  } else {
    return (
        < >
            <Button variant='contained' onClick={handleAddUserClick}>Add User</Button>
            <UserList />
        </>
    );
  }
}
// class User extends Component() {
//     render(){
//         return(
//             <>
//                 console.log('User');
//                 {/* <UserList/> */}
//             </>
//         )
//     }

// }
