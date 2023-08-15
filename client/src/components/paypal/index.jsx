import { Space } from "antd";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const style = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    bottom: "40%",
    height: "800px",
    justifyContent: "center",
    border: "1px solid #000",
  },
  h1: {
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

function Paypal() {
  return (
    <>
      <h1 style={style.h1}>asdfhkushadkfhkshdf</h1>
      <h1 style={style.h1}>asdfhkushadkfhkshdf</h1>
      <h1 style={style.h1}>asdfhkushadkfhkshdf</h1>
    </>
  );
}

export default Paypal;

/**
 




      <PayPalScriptProvider
        options={{
          "client-id":
            "ARtH9B3JN07dMui8CPRWFqHTmp0QRMU_MLOd5O7t1bmFUgeLazq92nBzYedr33oCAy0LNVPJ_fSSJ-xR",
        }}
      >
        <PayPalButtons
          createOder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "277699999",
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(function (details) {
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );
            });
          }}
        />
      </PayPalScriptProvider>
 */