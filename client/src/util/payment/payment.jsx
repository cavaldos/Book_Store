// import React from "react";
// import { PayPalButton,PayPalScriptProvider } from "react-paypal-button-v2";

// const PayPalCheckoutButton = () => {
//   const onSuccess = (details, data) => {
//     console.log(details);
//     console.log(data);
//     alert("Transaction completed by " + details.payer.name.given_name);
//   };

//   const onCancel = (data) => {
//     console.log(data);
//     alert("Transaction canceled");
//   };

//   const onError = (err) => {
//     console.error(err);
//     alert("Transaction error");
//   };

//   return (
//         <PayPalButton
//           amount="0.01"
//           currency="USD"
//           onSuccess={onSuccess}
//           onCancel={onCancel}
//           onError={onError}
//           options={{
//             clientId: "123456",
//             currency: "USD",
//           }}
//         />
//   );
// };

// export default PayPalCheckoutButton;
