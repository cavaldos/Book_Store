import { Button, Steps, Space, Progress, message } from "antd";
import Copy from "./copytext";
import axios from "axios";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Step } = Steps;

function Order(props) {
  const { current, id_order } = props;
  console.log("id_order", id_order);
  const steps = [
    {
      title: "Confirm Order",
      description: "Choose your items",
      icon: <UserOutlined />,
      index: 0,
    },
    {
      title: "Payment Details",
      description: "Enter your payment information",
      icon: <SolutionOutlined />,
      index: 1,
    },
    {
      title: "Order Confirmation",
      description: "Confirm your order",
      icon: <LoadingOutlined />,
      index: 2,
    },
    {
      title: "In Transit",
      description: "Your order is on its way",
      icon: <SmileOutlined />,
      index: 3,
    },
  ];
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    index: item.index,
    description: item.description,
    icon: item.icon,
  }));
  async function handleReceived() {
    axios
      .delete(`${process.env.REACT_APP_API_PORT}/removeorder`, {
        data: { id_order: id_order },
      })
      .then((res) => {
        console.log("res", res);
        if (res.data === "success") {
          message.success("Received success");
          setTimeout(() => {
            window.location.reload();
          }, 500);
          return;
        } else if (res.data === "fail") {
          message.error("Received fail");
          setTimeout(() => {
            window.location.reload();
          }, 500);
          return;
        }
      })
      .catch((err) => {
        message.error("Received fail");
        console.log("err", err);
      });
  }
  return (
    <div
      style={{ margin: "10px", border: "1px solid black", borderRadius: "3px" }}
    >
      {current === 0 ? (
        <h2 style={{ color: "red" }}>Confirm Order</h2>
      ) : current === 1 ? (
        <h2 style={{ color: "red" }}>Payment Details</h2>
      ) : current === 2 ? (
        <h2 style={{ color: "red" }}>Order Confirmation</h2>
      ) : (
        <h2 style={{ color: "red" }}>In Transit</h2>
      )}
      <Copy text={id_order}></Copy>
      <Steps className="steps" current={current} items={items} />
      <Space
        style={{
          position: "relative",
          right: "0",
          width: "100%",
          justifyContent: "right",
        }}
      >
        <Button
          type="primary"
          style={{
            margin: "10px ",
            position: "relative",
            borderRadius: "2px",
          }}
          onClick={handleReceived}
        >
          Received
        </Button>
        <Progress
          style={{ position: "relative", right: "0 10px 5px 0" }}
          type="circle"
          percent={(current + 1) * 25}
          strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
          size={50}
        />
      </Space>
    </div>
  );
}

export default Order;
