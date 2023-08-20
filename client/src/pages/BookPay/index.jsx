import * as React from "react";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import "./styles.scss";
import { Space, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formDataObject = {};
    for (let [key, value] of data.entries()) {
      formDataObject[key] = value;
    }
    console.log("khsanh", formDataObject);
    const dataUser = {
      id_card: parseInt(formDataObject.id_card),
      cardNumber: formDataObject.cardNumber,
      cardName: formDataObject.cardName,
      cardCvv: parseInt(formDataObject.cardCvv),
      validFrom: formDataObject.validFrom,
      validThru: formDataObject.validThru,
    };
    console.log("dataUser", dataUser);
    await axios
      .post(`${process.env.REACT_APP_API_PORT_PAYMENT}/addvisa`, dataUser)
      .then((res) => {
        console.log("res", res.data);
        if (res.data === "addvisasuccess") {
          message.success("Add Visa Success");
          return;
        }
      })
      .catch((err) => {
        console.log("err", err);
        message.error("Add Visa Fail");
      });
  }
const handleClick = () => {
    navigate(-1);
  };
  return (
    <>
      <Space className="spaces">
        <div className="wrappers">
          <h1>Debit or Credit Card</h1>

          <Container component="main" maxWidth="xs">
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="id_card"
                  label="Id Card"
                  name="id_card"
                  type="number"
                  autoComplete="number"
                  placeholder="ex: 123456789"
                  autoFocus
                />
                <TextField
                  style={{ flex: "1 1 100%" }}
                  margin="normal"
                  required
                  fullWidth
                  name="cardName"
                  label="Card Name"
                  type="string"
                  id="card_name"
                  autoComplete="current-name"
                  placeholder="ex: Nguyen Van A"
                />
                <TextField
                  style={{ flex: "1 1 100%" }}
                  margin="normal"
                  required
                  fullWidth
                  name="cardNumber"
                  label="Card Number"
                  type="string"
                  id="card_number"
                  autoComplete="current-number"
                  placeholder="ex: 1234 1234 1234 1234"
                />
                <TextField
                  style={{ flex: "0 1 50%", marginRight: "10px" }}
                  margin="normal"
                  required
                  id="cvv"
                  label="CVV"
                  name="cardCvv"
                  autoComplete="cvv"
                  placeholder="ex: 123"
                  autoFocus
                />
                <TextField
                  style={{ flex: "0 1 50%", marginRight: "10px" }}
                  margin="normal"
                  required
                  id="validFrom"
                  label="Valid From"
                  name="validFrom"
                  autoComplete="validFrom"
                  placeholder="ex: 01/21"
                />
                <TextField
                  style={{ flex: "0 1 50%", marginRight: "10px" }}
                  margin="normal"
                  required
                  id="validThru"
                  label="Valid Thru"
                  name="validThru"
                  autoComplete="validThru"
                  placeholder="ex: 01/26"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up Now
                </Button>
                <Button
                  fullWidth
                  variant="outline"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleClick}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Container>
        </div>
      </Space>
    </>
  );
}
