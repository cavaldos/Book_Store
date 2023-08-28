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
  Modal,
} from "antd";
import {
  SearchOutlined,
  UploadOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { addBook, importBook } from "..//..//..//api/book_api";
import * as XLSX from "xlsx";
// import { PreviewInfo } from "./previewBook";
import { Preview } from "@mui/icons-material";

const AddBookForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [bookOptions, setBookOptions] = useState([]);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isPreviewVisible, setPreviewVisible] = useState(false)
  const [data, setData] = useState(null)

  function isLocalFile(imageSource) {
    if (imageSource){
      if (imageSource.indexOf("http://") === 0 || imageSource.indexOf("https://") === 0) {
        return false; // Image source is a link
      } else if (imageSource.indexOf("data:image/") === 0) {
        return false; // Image source is a data URL
      } else {
        return true; // Image source is a locally uploaded file
      }
    }
  }
  const fetchBookSuggestions = async (value) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          value
        )}&maxResults=40`
      );
      const books = response.data.items.reduce((uniqueBooks, item) => {
        const book = {
          value: item.volumeInfo.title,
          label: item.volumeInfo.title,
          bookData: item.volumeInfo,
        };
        const isDuplicate = uniqueBooks.some(
          (existingBook) => existingBook.value === book.value
        );
        if (!isDuplicate) {
          uniqueBooks.push(book);
        }
        return uniqueBooks;
      }, []);
      setBookOptions(books);
    } catch (error) {
      console.error("Error fetching book suggestions:", error);
    }
  };
  const handleBookSelect = async (value, option) => {
    const bookData = option.bookData;
    const res = await form.setFieldsValue({
      Author: bookData.authors?.[0] || "",
      Price: bookData.saleInfo?.retailPrice?.amount || "",
      Image: bookData.imageLinks?.thumbnail || "",
      ISBN: bookData.industryIdentifiers?.[0]?.identifier || "",
      Genre: bookData.categories?.[0] || "",
      Publisher: bookData.publisher || "",
      Publish_Year: bookData.publishedDate?.slice(0, 4) || "",
      Description: bookData.description || "",
      rating: bookData.averageRating,
    });
  };
  const onFinish = async () => {
    if (data) {
      if (isLocalFile(data.Image)){
        data.Image = await handleFileUpload(imageFile).imageUrl;
      }
      console.log(data)
      setLoading(true);
      try{
        addBook(data)
        .then((response) => {
          message.success(response);
        })
      }
      catch(error) {
        console.log(`An error occurred while importing books: ${error}`);
        message.error(`An error occurred while importing books`);
      }
      // axios
      //   .post(`${process.env.REACT_APP_API_PORT}/addbook`, JSON.stringify(data), {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   })
      //   .then((response) => {  
      //   })
      //   .catch((error) => {
      //   });
        setTimeout(() => {
          setLoading(false);
          form.resetFields();
        }, 2000);
    }
  };
  const handleFileUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        `${process.env.REACT_APP_API_PORT}/upload-image`,
        formData
      );
      const imageUrl = response.data.imageUrl;

      console.log("Uploaded image URL:", imageUrl);

      setUploadStatus("done");
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("error");
    }
  };
  const validateNumber = (_, value) => {
    if (value && isNaN(value)) {
      return Promise.reject("This must be a number");
    }
    return Promise.resolve();
  };
  const getFormData = async () => {
    const res = await form?.getFieldValue()
    const data = await res.json()
    return data
  }
  const handleValuesChange = () => {
    form.validateFields().then(values => {
      setIsSubmitDisabled(false);
      setData(values)
    }).catch(() => {
      setIsSubmitDisabled(true);
    });
  };
  const handleCancel = () => {
    setPreviewVisible(false)
  }
  return (
    <div>
      <h1>Add Book</h1>
      <Form form={form} layout="vertical" onFinish={onFinish} onChange={handleValuesChange}>
        <Form.Item
          label="Image"
          valuePropName="fileList"
          getValueFromEvent={(event) => {
            return [event.fileList[0]];
          }}
        >
          <Upload action={setImageFile} listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        {form.getFieldValue('Image') && (<img src={form.getFieldValue('Image')} className="ant-upload-list-item"/>)}
        </Form.Item>
        {uploadStatus === "uploading" && <div>Uploading...</div>}
        {uploadStatus === "done" && <div>Upload completed</div>}
        {uploadStatus === "error" && <div>Error uploading file</div>}
        <Form.Item
          name="Tittle"
          label="Title"
          rules={[{ required: true, message: "Title is required" }]}
        >
          <AutoComplete
            options={bookOptions}
            onSearch={fetchBookSuggestions}
            onChange={fetchBookSuggestions}
            onSelect={handleBookSelect} 
            placeholder="Enter book title"
          />
          {/* <Input /> */}
        </Form.Item>
        <Form.Item
          name="Author"
          label="Author"
          rules={[{ required: true, message: "Author is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Price"
          label="Price"
          rules={[
            { required: true, message: "Price is required" },
            { validator: validateNumber },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="ISBN"
          label="ISBN"
          rules={[{ required: true, message: "ISBN is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Genre"
          label="Genre"
          rules={[{ required: true, message: "Genre is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Publisher"
          label="Publisher"
          rules={[{ required: true, message: "Publisher is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Publish_Year"
          label="Publish Year"
          rules={[
            { required: true, message: "Publish year is required" },
            { validator: validateNumber },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="rating" label="Rating">
            <Rate />
          </Form.Item>
        <Form.Item
          name="Description"
          label="Description"
          rules={[{ required: true, message: "Description is required" }]}
        >
        <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[
            { required: true, message: "Quantity is required" },
            { validator: validateNumber },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" onClick={setPreviewVisible} disabled={isSubmitDisabled}>
          Submit
        </Button>
        <Modal
        title="Preview"
        open={isPreviewVisible}
        onOk={onFinish}
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
      </Form>
    </div>
  );
};

const DisplayDataModal = ({ jsonData }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity'
    }
  ];

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Data Table"
        open={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Table dataSource={jsonData} columns={columns} />
      </Modal>
    </>
  );
};

const ImportBooks = () => {
  const [jsonData, setJsonData] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);

  const handlePreview = () => {
    setPreviewVisible(true);
  };

  const handlePreviewCancel = () => {
    setPreviewVisible(false);
  };

  const handleImport = async (file) => {
    try {
      const workbook = XLSX.read(await file.arrayBuffer(), { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = await XLSX.utils.sheet_to_json(sheet);
      await setJsonData(data);
      handlePreview();
    }
    catch (error) {
      message.error(error)
    }
  }

  const handleContinue = () => {
    onImport(jsonData);
    setPreviewVisible(false);
  };

  const onImport = async (data) => {
    try {
      const resultbook = XLSX.utils.book_new();
      const array = []
      
      data.forEach((book) => {
        try{
          var results = importBook(book);
          array.push(results);
        }
        catch(error){
          var results = error
          array.push(`Importing book with ID ${book.ID} error: ${error}`);
        }
      });
      const resultsheet = XLSX.utils.aoa_to_sheet([array]);
      XLSX.utils.book_append_sheet(resultbook, resultsheet, 'Result');
      const excelBuffer = XLSX.write(resultbook, { type: 'buffer', bookType: 'xlsx' });
      const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'result.xlsx';
      link.click();
      window.URL.revokeObjectURL(url);
    }
    catch(error){
      console.log('Error while importing book: ', error)
      message.error('Error while importing book: ', error)
    }
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity'
    }
  ];

  return (
    <>
      <Upload beforeUpload={handleImport} showUploadList={false} name="Stock">
        <Button icon={<UploadOutlined />}>Upload stocks</Button>
      </Upload>
      {jsonData.length > 0 && (
        <Modal
          title="Data Preview"
          open={previewVisible}
          onCancel={handlePreviewCancel}
          footer={[
            <Button key="cancel" onClick={handlePreviewCancel}>
              Cancel
            </Button>,
            <Button
              key="continue"
              type="primary"
              onClick={handleContinue}
            >
              Continue
            </Button>
          ]}
        >
          <Table dataSource={jsonData} columns={columns} />
        </Modal>
      )}
    </>
  );

}
const ImportBooksFunction = async (file) => {
  try {
    const workbook = XLSX.read(await file.arrayBuffer(), { type: "array" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);
    const resultbook = XLSX.utils.book_new();
    const array = []
    
    data.forEach((book) => {
      try{
        var results = importBook(book);
        array.push(results);
      }
      catch(error){
        var results = error
        array.push(`Importing book with ID ${book.ID} error: ${error}`);
      }
    });
    const resultsheet = XLSX.utils.aoa_to_sheet([array]);
    XLSX.utils.book_append_sheet(resultbook, resultsheet, 'Result');
    const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'result.xlsx';
    link.click();
    window.URL.revokeObjectURL(url);
  }
  catch(error){
    console.log('Error while importing book: ', error)
    message.error('Error while importing book: ', error)
  }
};
export {
  AddBookForm,
  ImportBooks
};