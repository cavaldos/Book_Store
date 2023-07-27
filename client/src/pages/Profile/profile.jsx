import "./profile.scss";
import Avatar from "@mui/material/Avatar";
import React from "react";
import { useSelector } from "react-redux";
import StateOder from "./stateOder";
import Card from "./card/card";
import Button from "@mui/material/Button";
function Profile() {
  const role = useSelector((state) => state.role);

  return (
    <>
      <div className="wrapper-profile">
        <div className="background-profile">
          <Avatar
            className="avatar-profile"
            alt={role.email}
            src="/static/images/avatar/1.jpg"
          />
          <h1 className="name-profile">{role.email}</h1>
          <p className="role-profile">{role.role}</p>
        </div>
      </div>

      <div className="info">
        <div className="wallet-profile">
          <div className="edit-wallet">
            <div className="balance">
              <p className="balance-text">Balance</p>
              <h1>$ {100}</h1>
            </div>
            <Button variant ="contained" className="edit buttonp">Edit</Button>
            <Button variant ="contained" className="recharge buttonp">Recharge</Button>
            <Button variant ="contained" className="withdraw buttonp">Withdraw</Button>
          </div>
          <div className="wrapper-card">
            <Card />
          </div>
        </div>
        <div className="oder-profile">
          <StateOder />
          <StateOder />
          <StateOder />
          <StateOder />
          <StateOder />
          <StateOder />
          <StateOder />
          <StateOder />
          <StateOder />
          <StateOder />
          <StateOder />
          <StateOder />
          <StateOder />
        </div>
      </div>
    </>
  );
}

export default Profile;
