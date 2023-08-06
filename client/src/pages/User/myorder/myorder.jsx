import Order from "./oder";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function MyOrder() {
  const [findOrder, setFindOrder] = useState([]);
  const user = useSelector((state) => state.user);
  console.log("user", user.order_code);

  useEffect(() => {
    axios
      .post("http://localhost:8001/findorder", {
        order_code: user.order_code,
      })
      .then((res) => {
        console.log("res", res.data);
        if (Array.isArray(res.data)) {
          setFindOrder(res.data);
        } else {
          setFindOrder([]); // Set an empty array if the response is not an array
        }
      })
      .catch((err) => console.log(err));
  }, [user.order_code]);

  console.log("find", findOrder);

  return (
    <>
      <div style={{ margin: "10px 50px" }}>
        <h2>List My Order</h2>
        {Array.isArray(findOrder) && findOrder.length === 0 ? (
          <h2>No order</h2>
        ) : (
          findOrder.map((order, index) => {
            const {
              order_code,
              order_volume,
              address,
              price_total,
              state,
              date,
            } = order;
            return <Order key={index} current={state} id_order={order_code} />;
          })
        )}
      </div>
    </>
  );
}

export default MyOrder;
