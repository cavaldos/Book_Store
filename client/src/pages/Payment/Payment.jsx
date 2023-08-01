import React, { Fragment } from 'react';
import CheckoutSteps from '../../components/checkoutstep/CheckoutSteps';
import { useNavigate } from 'react-router-dom';
import './Payment.scss';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';

const options = {
  style: {
    base: {
      fontSize: '16px',
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

const formStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
};

const colStyle = {
  width: '100%',
  maxWidth: '100%',
  flex: '0 0 100%',
};

const shadowStyle = {
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
};

const mb4Style = {
  marginBottom: '1rem',
  textAlign:'center',
};

const formGroupStyle = {
  marginBottom: '1rem',
};

const labelStyle = {
  marginBottom: '0.5rem',
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '0.75rem 1rem',
  fontSize: '1rem',
  lineHeight: '1.5',
  borderRadius: '0.25rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const btnStyle = {
  display: 'inline-block',
  fontWeight: 'bold',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  userSelect: 'none',
  border: '1px solid transparent',
  padding: '0.625rem 1.25rem',
  fontSize: '1rem',
  lineHeight: '1.5',
  borderRadius: '0.25rem',
  color: '#fff',
  backgroundColor: '#6366f1',
  transition: 'all 0.15s ease',
  cursor: 'pointer',
  width: '100%',
};

const Payment = () => {
  const history = useNavigate();

  return (
    <Fragment>
      <CheckoutSteps payment />
      <div style={formStyle}>
        <div style={colStyle}>
          <form style={shadowStyle}>
            <h1 style={mb4Style}>Card Info</h1>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="card_num_field">
                Card Number
              </label>
              <CardNumberElement type="text" id="card_num_field" style={inputStyle} options={options} />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="card_exp_field">
                Card Expiry
              </label>
              <CardExpiryElement type="text" id="card_exp_field" style={inputStyle} options={options} />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="card_cvc_field">
                Card CVC
              </label>
              <CardCvcElement type="text" id="card_cvc_field" style={inputStyle} options={options} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button id="pay_btn" type="submit" style={btnStyle}>
                Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Payment;
