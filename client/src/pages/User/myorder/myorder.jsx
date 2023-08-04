import Order from "./oder";
import { useEffect, useState } from "react";
import axios from "axios";

function MyOrder() {
  const [getAllOrder, setGetAllOrder] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/getallorder")
      .then((res) => {
        setGetAllOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
     <div style={{margin:"10px 50px"}}>
     <h2>List My Oder</h2>
         {getAllOrder.map((order, index) => {
           const { order_code, order_volume, address, price_total, state, date } =
             order;
           return <Order key={index} current={state} id_order={order_code} />;
         })}
     </div>
    </>
  );
}

export default MyOrder;
