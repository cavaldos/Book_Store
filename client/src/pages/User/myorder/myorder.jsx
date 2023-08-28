import Order from "./oder";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function MyOrder() {
  const [findOrder, setFindOrder] = useState([]);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_PORT}/findorder`, {
        order_code: user.list_id_order,
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
        <h2
          style={{
            backgroundColor: "#f0f2f5",
            textAlign: "center",
          }}
        >
          List My Order
        </h2>
        {findOrder.map((order, index) => {
          const {
            id_order,
            order_volume,
            address,
            price_total,
            state,
            date,
          } = order ?? {}; // Use optional chaining and provide an empty object as default

          return (
            <Order
              key={index}
              current={state}
              id_order={id_order ?? ""} // Use optional chaining and provide an empty string as default
            />
          );
        })}
      </div>
    </>
  );
}

export default MyOrder;
