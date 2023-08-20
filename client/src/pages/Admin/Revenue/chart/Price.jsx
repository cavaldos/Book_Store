import React, { useEffect, useState } from "react";
import { DualAxes } from "@ant-design/plots";
import { Select } from "antd";
import axios from "axios";

const { Option } = Select;

function Revenue() {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2021);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_PORT}/findyear/${selectedYear}`)
      .then((res) => {
        // Transform the fetched data into the required format
        const transformedData = res.data.map((item) => ({
          time: `${item.time.year}-${item.time.month}`,
          "Total price": item.amount,
          Amout: item.total_revenue,
        }));
        setData(transformedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedYear]);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const filteredData = data.filter(
    (item) => parseInt(item.time.split("-")[0]) === selectedYear
  );

  const config = {
    data: [filteredData, filteredData],
    xField: "time",
    yField: ["Total price", "Amout"],
    geometryOptions: [
      {
        geometry: "column",
      },
      {
        geometry: "line",
        lineStyle: {
          lineWidth: 2,
        },
      },
    ],
  };

  // Calculate total revenue and number of orders for each year
  const revenueSum = filteredData.reduce(
    (sum, item) => sum + item["Total price"],
    0
  );
  const orderCountSum = filteredData.reduce((sum, item) => sum + item.Amout, 0);

  return (
    <>
      <h1 style={{ justifyContent: "center", textAlign: "center" }}>
        Revenue per product
      </h1>
      <div
        style={{ textAlign: "center", display: "flex", flexDirection: "row" }}
      >
        <h3
          style={{
            backgroundImage: "linear-gradient(to right, #92C840, #0EB394)",
            textAlign: "center",
            width: "20%",
            height: "60px",
            margin: "10px auto",
            borderRadius: "5px",
          }}
        >
          Total Revenue: {revenueSum}
        </h3>
        <h3
          style={{
            backgroundImage: "linear-gradient(to right, #74C4FF, #33AAFF)",
            textAlign: "center",
            width: "20%",
            margin: "10px auto",
            borderRadius: "5px",
          }}
        >
          Number of Orders: {orderCountSum}
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Select
          defaultValue={selectedYear}
          style={{ width: 120 }}
          onChange={handleYearChange}
        >
          <Option value={2021}>2021</Option>
          <Option value={2022}>2022</Option>
          <Option value={2023}>2023</Option>
        </Select>
      </div>

      <DualAxes {...config} />
    </>
  );
}

export default Revenue;
