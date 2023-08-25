import React, { useEffect, useState } from "react";
import { Pie, Column } from "@ant-design/plots";
import axios from "axios";

function Rating() {
  const [ratingData, setRatingData] = useState([]);

  useEffect(() => {
    // Call API to get the rating data
    axios
      .get(`${process.env.REACT_APP_API_PORT}/getrating`)
      .then((response) => {
        setRatingData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getPieData = () => {
    // Calculate the count of each unique rating value
    const ratingCounts = {};
    ratingData.forEach((rating) => {
      if (ratingCounts[rating]) {
        ratingCounts[rating]++;
      } else {
        ratingCounts[rating] = 1;
      }
    });

    // Transform the data into the format expected by the Pie component
    const transformedData = Object.entries(ratingCounts).map(
      ([rating, count]) => ({
        type: rating.toString(),
        value: count,
      })
    );

    return transformedData;
  };

  const getColumnData = () => {
    // Calculate the count of each unique rating value
    const ratingCounts = {};
    ratingData.forEach((rating) => {
      if (ratingCounts[rating]) {
        ratingCounts[rating]++;
      } else {
        ratingCounts[rating] = 1;
      }
    });

    // Transform the data into the format expected by the Column component
    const transformedData = Object.entries(ratingCounts).map(
      ([rating, count]) => ({
        rating: rating.toString(),
        count,
      })
    );

    return transformedData;
  };

  return (
    <>
      <h1 style={{ justifyContent: "center", textAlign: "center" }}>Rating</h1>

      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <Pie
            appendPadding={10}
            data={getPieData()}
            angleField="value"
            colorField="type"
            radius={0.8}
            label={{
              type: "outer",
            }}
            interactions={[
              {
                type: "element-active",
              },
            ]}
          />
        </div>
        <div style={{ width: "50%" }}>
          <Column
            appendPadding={10}
            data={getColumnData()}
            xField="rating"
            yField="count"
            label={{
              position: "top",
              style: {
                
                fill: "#aaa",
              },
            }}
            interactions={[
              {
                type: "element-active",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Rating;
