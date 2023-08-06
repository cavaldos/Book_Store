import React from "react";
import { Card, Button } from "antd";
import "./infor.scss"; // Import file CSS tùy chỉnh

function InforWallet() {
  const idCard = "123456789";
  const accountBalance = 1000;

  const handleDeposit = () => {
    // Xử lý logic khi nhấn nút "Nạp tiền"
  };

  const handleWithdraw = () => {
    // Xử lý logic khi nhấn nút "Rút tiền"
  };

  return (
   <div className="proflie-wallet-wrapper">
     <Card title="Wallet Information" className="custom-card">
       <p className="card-label">ID Card: {idCard}</p>
       <p className="card-label">Account Balance: {accountBalance}</p>
       <Button type="primary" onClick={handleDeposit}>
         Deposit
       </Button>
       <Button onClick={handleWithdraw}>Withdraw</Button>
     </Card>
   </div>
  );
}

export default InforWallet;
