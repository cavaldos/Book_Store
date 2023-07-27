import React from 'react';
import UserList from '../../../components/user/user-list.component';
import Button from '@mui/material/Button';
import AddUser from '../../../components/user/add-user.component';
import { Router, Routes, Route, Link, Outlet } from "react-router-dom";

export default function User(){
  return(
    < >
      <Link to={"/manager-user/add"}>
        <Button
        variant='contained'>
            Create new user 
        </Button>
      </Link>
      <UserList/>
    </>
  )
}

