import axiosConfig from "./configAPI";

const getAllOrder = () => {
  return axiosConfig.get("/getallorder");
};
const createOrder = (data) => {
  return axiosConfig.post("/createorder", data);
};
const updateOrder = (data) => {
  return axiosConfig.put("/updateorder", data);
};
const deleteOrder = (data) => {
  return axiosConfig.delete("/deleteorder", data);
};
const getOrderById = (data) => {
  return axiosConfig.get("/getorderbyid", data);
};
const getOrderByUserId = (data) => {
  return axiosConfig.get("/getorderbyuserid", data);
};
export {
  getAllOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrderById,
  getOrderByUserId,
};
