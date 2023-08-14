import React, { useEffect, useState } from "react";
import { Pie, Column } from "@ant-design/plots";
import axios from "axios";

function Genre() {
  const [genreData, setGenreData] = useState([]);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    // Call API to get the rating data
    axios
      .get("http://localhost:8001/getgenre")
      .then((response) => {
        setGenreData(response.data.genre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (genreData && genreData.length > 0) {
      setConfig({
        forceFit : true , 
        title : { 
          visible : true , 
          text : 'multi-color pie chart' , 
        } ,
        description : { 
          visible : genreData.map(({ _id, nSold }) => ({
            type: _id,
            value: nSold,
          })) , 
          text :
            'Specify a color mapping field (colorField)\uFF0C Pie chart slices will be displayed in different colors according to the field data\u3002The specified color needs to be configured as an array\u3002\nWhen the pie chart label type is set to inner\ The uFF0C label will be displayed inside the slice \u3002Set the offset value of the offset control label\u3002' ,
        } ,
        radius : 0.8 , 
        data: genreData ,
        angleField : 'nSold' , 
        colorField : '_id' , 
        label : { 
          visible : true , 
          type : 'inner' , 
        } ,      });
    }
  }, [genreData]);
  
  return (
    <>
      <h1 style={{ justifyContent: "center", textAlign: "center" }}>Revenue</h1>

      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          {!config && <div>Loading...</div>}
          {config && <Pie {...config}/>}
        </div>



        {/* <div style={{ width: "50%" }}>
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
        </div> */}
      </div>
    </>
  );
}

export default Genre;