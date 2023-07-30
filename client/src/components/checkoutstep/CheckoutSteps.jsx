import React from 'react';
import { Link } from 'react-router-dom';
import { Steps, Space } from 'antd';
import { HomeOutlined, FileDoneOutlined, CreditCardOutlined } from '@ant-design/icons';

const steps = [
  {
    title: 'Shipping',
    icon: <HomeOutlined />,
    link: 'shipping',
  },
  {
    title: 'Confirm Order',
    icon: <FileDoneOutlined />,
    link: 'order/confirm',
  },
  {
    title: 'Payment',
    icon: <CreditCardOutlined />,
    link: 'payment',
  },
];

const CheckoutSteps = ({ shipping, confirmOrder, payment }) => {
  const currentStep = steps.findIndex((step) => {
    if (shipping && step.link === 'shipping') return true;
    if (confirmOrder && step.link === 'order/confirm') return true;
    if (payment && step.link === 'payment') return true;
    return false;
  });

  return (
    <div style={{ margin: '5rem auto', maxWidth: '600px' }}>
      <Steps current={currentStep}>
        {steps.map((step, index) => (
          <Steps.Step
            key={index}
            title={step.title}
            icon={step.icon}
          />
        ))}
      </Steps>
    </div>
  );
};

export default CheckoutSteps;
