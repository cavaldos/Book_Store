import React, { useState, useEffect, useRef } from "react";
import { Steps, Button } from "antd";
import axios from "axios";
import LoadingOutlined from "@ant-design/icons/LoadingOutlined";
import "./user.scss";
import {
  ConfirmOrder,
  PaymentDetails,
  OrderConfirmation,
  InTransit,
} from "./statepayment";
import { useSelector, useDispatch } from "react-redux";
import {
  createPayment,
  updateCurrentStep,
} from "../../redux/features/paymentSlice";
const { Step } = Steps;

const Payment = () => {
  const [getAllOrder, setGetAllOrder] = useState([]);
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const payment = useSelector((state) => state.payment);

  // console.log("order", order);
  // console.log("payment", payment);

  const currentStep = payment.currentStep;
  // console.log("currentStep", currentStep);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8001/getallorder")
  //     .then((res) => {
  //       setGetAllOrder(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // console.log("getAllOrder", getAllOrder);
  // console.log("getAllOrder", getAllOrder[0].order_volume[0].id_book);

  const handleNext = () => {
    dispatch(updateCurrentStep({ currentStep: currentStep + 1 }));
  };
  const handlePrev = () => {
    dispatch(createPayment({ currentStep: currentStep - 1 }));
  };
  const steps = [
    {
      title: "Confirm Order",
      content: <ConfirmOrder />,
      description: "This is a description.",
    },
    {
      title: "Payment Details",
      content: <PaymentDetails />,
    },
    {
      title: "Order Confirmation",
      content: <OrderConfirmation />,
      icon: <LoadingOutlined />,
    },
    {
      title: "In Transit",
      content: <InTransit />,
    },
  ];
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    marginTop: 16,
  };
  return (
    <>
    <div className="payment">
    <h1>My order</h1>
        <Steps className="steps" current={currentStep} items={items} />
        <div style={contentStyle}>{steps[currentStep].content}</div>
        <div style={{ marginTop: "24px" }}>
          {currentStep > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
              Previous
            </Button>
          )}
          {currentStep < steps.length - 1 ? (
            <Button type="primary" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={() => console.log("Processing complete!")}
            >
              Done
            </Button>
          )}
        </div>
    </div>
    </>
  );
};

export default Payment;

//import React, { useState } from "react";
// import { Button, Steps } from "antd";
// import {
//   ConfirmOrder,
//   PaymentDetails,
//   OrderConfirmation,
//   InTransit,
// } from "./statepayment";

// const steps = [
//   {
//     title: "Confirm Order",
//     content: <ConfirmOrder />,
//   },
//   {
//     title: "Payment Details",
//     content: <PaymentDetails />,
//   },
//   {
//     title: "Order Confirmation",
//     content: <OrderConfirmation />,
//   },
//   {
//     title: "In Transit",
//     content: <InTransit />,
//   },
// ];

// const Payment = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const handleNext = () => {
//     setCurrentStep(currentStep + 1);
//   };

//   const handlePrev = () => {
//     setCurrentStep(currentStep - 1);
//   };

//   const items = steps.map((item) => ({
//     key: item.title,
//     title: item.title,
//   }));

//   const contentStyle = {
//     lineHeight: "260px",
//     textAlign: "center",
//     marginTop: 16,
//   };

//   return (
//     <>
//       <Steps current={currentStep} items={items} />
//       <div style={contentStyle}>{steps[currentStep].content}</div>
//       <div style={{ marginTop: "24px" }}>
//         {currentStep > 0 && (
//           <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
//             Previous
//           </Button>
//         )}
//         {currentStep < steps.length - 1 ? (
//           <Button type="primary" onClick={handleNext}>
//             Next
//           </Button>
//         ) : (
//           <Button
//             type="primary"
//             onClick={() => console.log("Processing complete!")}
//           >
//             Done
//           </Button>
//         )}
//       </div>
//     </>
//   );
// };

// export default Payment;
