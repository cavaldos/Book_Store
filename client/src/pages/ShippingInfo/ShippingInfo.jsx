import React, { Fragment, useState } from 'react';
import { countries } from 'countries-list';
import CheckoutSteps from '../../components/checkoutstep/CheckoutSteps';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SetAddress, SetCity, SetPostalCode, SetPhoneNo, SetCountry } from '../../redux/features/shippinginfoSlice';

const Shipping = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const countriesList = Object.values(countries);

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [country, setCountry] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('address:', address);
    console.log('city:', city);
    console.log('postalCode:', postalCode);
    console.log('phoneNo:', phoneNo);
    console.log('country:', country);

    // Make sure all the required fields have valid values before dispatching
    if (!address || !city || !postalCode || !phoneNo || !country) {
      console.log('Please fill in all the required fields.');
      return;
    }

    dispatch(SetAddress(address));
    dispatch(SetCity(city));
    dispatch(SetPostalCode(postalCode));
    dispatch(SetPhoneNo(phoneNo));
    dispatch(SetCountry(country));

    history('/confirm');
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '100%',
    cursor: 'pointer',
    borderRadius: '4px',
  };

  return (
    <Fragment>

      <CheckoutSteps shipping />

      <div style={formStyle} className="container mx-auto my-10">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign:'center' }}>Shipping Info</h1>
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="address_field" style={labelStyle}>
                Address
              </label>
              <input
                type="text"
                id="address_field"
                style={inputStyle}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="city_field" style={labelStyle}>
                City
              </label>
              <input
                type="text"
                id="city_field"
                style={inputStyle}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="phone_field" style={labelStyle}>
                Phone No
              </label>
              <input
                type="phone"
                id="phone_field"
                style={inputStyle}
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="postal_code_field" style={labelStyle}>
                Postal Code
              </label>
              <input
                type="number"
                id="postal_code_field"
                style={inputStyle}
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="country_field" style={labelStyle}>
                Country
              </label>
              <select
                id="country_field"
                style={inputStyle}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                {countriesList.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" style={buttonStyle}>
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;
