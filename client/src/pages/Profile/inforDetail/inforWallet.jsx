import React, { useState, useEffect } from "react";
import { Card, Button, Input, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../../redux/features/userSlice";
import "./infor.scss";
import axios from "axios";

function InforWallet() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const idCard = user.id_card;
  const accountBalance = user.account_balance;

  const [isUpdatingCard, setIsUpdatingCard] = useState(false);
  const [updatedCardNumber, setUpdatedCardNumber] = useState("");
   const [showPartialIdCard, setShowPartialIdCard] = useState(false);
  const [account_balance, setAccount_balance] = useState(0);
  const handleUpdateCard = () => {
    setIsUpdatingCard(true);
    setUpdatedCardNumber("");
  };

  const handleSaveUpdatedCard = () => {
    console.log("updatedCardNumber", updatedCardNumber);
    axios
      .put(`${process.env.REACT_APP_API_PORT}/edituser`, {
        _id: user._id,
        id_card: updatedCardNumber,
      })
      .then((response) => {
        if (response.data === "updatedsuccess") {
          message.success("Card updated successfully.");
          dispatch(updateUser({ email: user.email }));
          setIsUpdatingCard(false);
          return;
        } else {
          message.error("Failed to update card. Please try again later.");
        }
      })
      .catch((error) => {
        console.error(error);
        message.error("Failed to update card. Please try again later.");
      });
  };

  useEffect(() => {
    //http://localhost:5000/getaccountbalance
    axios
      .post(`${process.env.REACT_APP_API_PORT_PAYMENT}/getaccountbalance`, {
        //convert id_card to number
        id_card: parseInt(user.id_card),
      })
      .then((response) => {
        console.log("response khanh", response.data);
        setAccount_balance(response.data);
      });
  }, []);
  const renderIdCard = () => {
    if (showPartialIdCard) {
      const partialIdCard = idCard.substring(idCard.length - 3);
      return `***${partialIdCard}`;
    } else {
      return idCard;
    }
  };
  const handleCancelUpdateCard = () => {
    setIsUpdatingCard(false);
    setUpdatedCardNumber("");
  };

  return (
    <div className="proflie-wallet-wrapper">
      <Card title="Wallet Information" className="custom-card visa-card">
        <p className="card-label">ID Card: {renderIdCard()}</p>
        {isUpdatingCard ? (
          <div className="card-input">
            <Input
              value={updatedCardNumber}
              onChange={(e) => setUpdatedCardNumber(e.target.value)}
              placeholder="Enter updated card number"
            />
            <Button
              type="primary"
              className="save-button"
              style={{ marginTop: "10px" }}
              onClick={handleSaveUpdatedCard}
            >
              Save
            </Button>
            <Button
              className="cancel-button"
              style={{ marginTop: "10px" }}
              onClick={handleCancelUpdateCard}
            >
              Cancel
            </Button>
          </div>
        ) : (
          <>
            <p className="card-label">
              Account Balance: ${account_balance.toLocaleString()}{" "}
            </p>
            <Button
              type="primary"
              className="update-button"
              style={{ marginTop: "10px" }}
              onClick={handleUpdateCard}
              disabled={isUpdatingCard}
            >
              Update ID Card
            </Button>
          </>
        )}
      </Card>
    </div>
  );
}

export default InforWallet;
