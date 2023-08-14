import { Steps } from "antd";
import Copy from "./copytext";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Step } = Steps;

function Order(props) {
  const { current, id_order } = props;
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
  return (
    <div
      style={{ margin: "10px", border: "2px solid black", borderRadius: "8px" }}
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
    </div>
  );
}

export default Order;
