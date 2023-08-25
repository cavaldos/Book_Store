import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Input,
  Button,
  Space,
  Form,
  Upload,
  Row,
  Col,
  Rate,
  message,
  AutoComplete,
  Modal
} from "antd";
import {
  SearchOutlined,
  UploadOutlined,
  PlusOutlined,
} from "@ant-design/icons";

export const PreviewInfo = (data, handleOk) => {
    const [isPreviewVisible, setPreviewVisible] = useState(false)
    const handleCancel = () => {
        setPreviewVisible(false)
    }
    data = data.data
    return (
        <>
        <Button type="primary" onClick={setPreviewVisible}>
            Submit
        </Button>
        <Modal
        title="Preview"
        visible={isPreviewVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        >
            <img src={data?.Image}/>
            <p>Title: {data?.Tittle || ""}</p>
            <p>Author: {data?.Author || ""}</p>
            <p>Price: {data?.Price || ""}</p>
            {/* <p>Image: {data?.Image || ""}</p> */}
            <p>ISBN: {data?.ISBN || ""}</p>
            <p>Genre: {data?.Genre || ""}</p>
            <p>Publisher: {data?.Publisher || ""}</p>
            <p>Publish_Year: {data?.Publish_Year?.slice(0, 4) || ""}</p>
            <p>Description: {data?.Description || ""}</p>
            <p>Rating: {data?.Rating || ""}</p>
        </Modal>
        </>
    );
}

// export const PreviewInfo = (form) => {
// var data = {}
//     useEffect = () => {
//         data = form.getFieldValue()
//     }
//     return(
//         < >
//         <Modal
//         title="Preview"
//         visible={isPreviewVisible}
//         onCancel={() => setPreviewVisible(false)}
//         footer={[
//             <Button key="close" onClick={() => {
//             setPreviewVisible(false)
//             setUploadPermission(false)
//             }}>
//             Cancel
//             </Button>,
//             <Button key="close" onClick={() => {
//             setPreviewVisible(false)
//             setUploadPermission(true)
//             }}>
//             Submit
//             </Button>
//         ]}
//         >
//         <p>Title: {data.Tittle?.[0]} || "" </p>
//         <p>Author: {data.Author?.[0]} || "" </p>
//         <p>Price: {data.Price} || "" </p>
//         <p>Image: {data.Image} || "" </p>
//         <p>ISBN: {data.ISBN} || ""</p>
//         <p>Genre: {data.Genre} || ""</p>
//         <p>Publisher: {data.Publisher} || ""</p>
//         <p>Publish_Year: {data.Publish_Year?.slice(0, 4)} || ""</p>,
//         <p>Description: {data.Description} || ""</p>
//         <p>rating: {data.Rating} </p>
//         </Modal>
//         </>
//     )
// }
