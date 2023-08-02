import React from "react";
import "./styles.scss";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { message } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function Product(props) {
  const { id, image, description, price } = props;
  const [new_quantity, setNew_quantity] = useState(1);
  const [total, setTotal] = useState(price * new_quantity);



  const handleAddproduct = () => {
    setNew_quantity(new_quantity + 1);
    setTotal(price * (new_quantity + 1));
  };
  const handleSubproduct = () => {
    if (new_quantity > 1) {
      setNew_quantity(new_quantity - 1);
      setTotal(price * (new_quantity - 1));
    }
  };
  const removeProduct = (id) => {

     const cart = JSON.parse(localStorage.getItem("cart")) || [];
     const updatedCart = cart.filter((item) => item.id !== id);
     localStorage.setItem("cart", JSON.stringify(updatedCart));
     message.success("Product removed from cart!");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      <div className="product">
        <div className="block-product res">
          <div className="image res">
            <img className="img" src={image} alt="this is picture" />
          </div>
          <div className="description res">{description}</div>
        </div>
        <div className="quantity res">
          <h3 className="icon title">{new_quantity}</h3>
          <AddIcon
            className="icon add"
            onClick={() => {
              handleAddproduct();
            }}
          />
          <RemoveIcon
            className="icon sub"
            onClick={() => {
              handleSubproduct();
            }}
          />
        </div>
        <div className="price res">${price}</div>
        <div className="remove res">
          <Button
            style={{
              color: "var(--text-dark)",
              borderColor: "var(--text-dark)",
              // hover
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => removeProduct(id)}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <h5 className="total-product">Total: ${total}</h5>
        </div>
      </div>
    </>
  );
}

export default Product;

// import React from "react";
// import "./styles.scss";
// import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
// import RemoveIcon from "@mui/icons-material/Remove";
// import AddIcon from "@mui/icons-material/Add";
// import { message } from "antd";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   removeOrder,
//   increaseQuantity,
//   decreaseQuantity,
// } from "../../redux/features/orderSlice";

// function Product(props) {
//   const { id, image, description, price } = props;
//   const quantity = useSelector((state) => {
//     const order = state.order.find((item) => item.id === id);
//     return order ? order.quantity : 0;
//   });
//   const [totalPrice, setTotalPrice] = useState(0);

//   const total = price * quantity;
//   useEffect(() => {
//     setTotalPrice(price * quantity);
//   }, [price, quantity]);
//   const dispatch = useDispatch();

//   const handleAddproduct = (id) => {
//     dispatch(increaseQuantity(id));
//   };
//   const handleSubproduct = (id) => {
//     dispatch(decreaseQuantity(id));
//   };
//   const removeProduct = (id) => {
//     dispatch(removeOrder(id));
//     message.success("Delete product successfully");
//   };

//   return (
//     <>
//       <div className="product">
//         <div className="block-product res">
//           <div className="image res">
//             <img className="img" src={image} alt="this is picture" />
//           </div>
//           <div className="description res">{description}</div>
//         </div>
//         <div className="quantity res">
//           <h3 className="icon title">{quantity}</h3>
//           <AddIcon
//             className="icon add"
//             onClick={() => {
//               handleAddproduct(id);
//             }}
//           />
//           <RemoveIcon
//             className="icon sub"
//             onClick={() => {
//               handleSubproduct(id);
//             }}
//           />
//         </div>
//         <div className="price res">${price}</div>
//         <div className="remove res">
//           <Button
//             style={{
//               color: "var(--text-dark)",
//               borderColor: "var(--text-dark)",
//               // hover
//               "&:hover": {
//                 cursor: "pointer",
//               },
//             }}
//             onClick={() => removeProduct(id)}
//             variant="outlined"
//             startIcon={<DeleteIcon />}
//           >
//             Delete
//           </Button>
//           <h5 className="total-product">Total: ${totalPrice.toFixed(2)}</h5>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Product;
