import React, { useState } from "react";
import { Card } from "antd";

import { OrderDetail, ConfirmOrder } from "./contentOder";
const tabList = [
  {
    key: "oderdetail",
    tab: "Oder Detail Request",
  },
  {
    key: "confirmorder",
    tab: "Confirm Order",
  },
];

const CardConfirmOrder = (props) => {
  const { orderid, email } = props;
  const [activeTabKey1, setActiveTabKey1] = useState("tab1");
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  const contentList = {
    oderdetail: <OrderDetail orderid={orderid} />,
    confirmorder: <ConfirmOrder orderid={orderid} email={email} />,
  };

  return (
    <>
      <Card
        style={{
          width: "100%",
        }}
        title="Card title"
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
      <br />
    </>
  );
};
export default CardConfirmOrder;
