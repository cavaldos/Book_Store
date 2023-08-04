import React, { useEffect, useState } from 'react';
import { Column, Pie } from '@ant-design/plots';
import { Table, Carousel, Card, Row, Col, Image, List } from 'antd';
import './style.css'
import axios from 'axios';

const GenreChart = ({data}) => {
    const [config, setConfig] = useState(null)
    
    useEffect(() => {
        if (data){
            setConfig({ 
                forceFit : true , 
                title : { 
                  visible : true , 
                  text : 'multi-color pie chart' , 
                } ,
                description : { 
                  visible : true , 
                  text :
                    'Specify a color mapping field (colorField)\uFF0C Pie chart slices will be displayed in different colors according to the field data\u3002The specified color needs to be configured as an array\u3002\nWhen the pie chart label type is set to inner\ The uFF0C label will be displayed inside the slice \u3002Set the offset value of the offset control label\u3002' ,
                } ,
                radius : 0.8 , 
                data ,
                angleField : 'nSold' , 
                colorField : '_id' , 
                label : { 
                  visible : true , 
                  type : 'inner' , 
                } ,
              });
        }
    }, [])
    return(
        < >
            {!config && <div>Loading...</div>}
            {config && <Pie {...config}/>}
        </>
    )
}
const BestSellers = ({ data }) => {
    console.log(data[0].book_info[0]);
    // const bestSellers = [
    //     { title: 'Book 1', author: 'Author 1', price: 9.99 },
    //     { title: 'Book 2', author: 'Author 2', price: 12.99 },
    //     { title: 'Book 3', author: 'Author 3', price: 14.99 },
    // ];
    return (
      <div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 7,
          }}
          dataSource={data} // Corrected placement of data prop
          renderItem={(item) => (
            <List.Item>
              <Card className="book-card" title={item.book_info[0].Tittle}>
                <div className="image-container">
                  <Image
                    className="book-cover"
                    src={item.book_info[0].Image}
                    alt="Image cover"
                  />
                </div>
                <p>Author: {item.book_info[0].Author}</p>
                <p>Price: {item.book_info[0].Price}</p>
              </Card>
            </List.Item>
          )}
        />
      </div>
    );
};
const MonthlyRevenues = ({boo}) => {
    const data = [
        {
            "_id": "08/2022",
            "totalIncome": 60
        },
        {
            "_id": "08/2023",
            "totalIncome": 1160
        },
        {
            "_id": "09/2023",
            "totalIncome": 60
        }
    ];
    const config = {
        data,
        xField: '_id',
        yField: 'totalIncome',
        color: ({ type }) => {
            return '#ffd333';
        },
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 1,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: 'Month',
            },
            sales: {
                alias: 'Income',
            },
        },
    };
    return(
        <div className="mt-4">
            <h3 className="mb-5 title">Income Statics</h3>
            <div>
                <Column {...config} />
            </div>
        </div>
    )
}


const columns = [
    {
        title: 'SNo',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Product',
        dataIndex: 'product',
    },
    {
        title: 'Status',
        dataIndex: 'staus',
    },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
    data1.push({
        key: i,
        name: `Edward King ${i}`,
        product: 32,
        staus: `London, Park Lane no. ${i}`,
    });
}
const Revenue = () => {
    const [genreData, setGenreData] = useState(null)
    const [bestSellers, setBestSelleres] = useState(null)
    const [monthlyRevenues, setMonthlyRevenues] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get('http://127.0.0.1:8001/getrevenues');
            const data = res.data;
            if (data){
                setGenreData(data.genreData);
                setBestSelleres(data.bestSellers);
                setMonthlyRevenues(data.revenues);
            } // Update the state with the response data
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
    }, []);

    
    return (
        <div>
            {(!genreData || !bestSellers) && (<div>Loading...</div>)}

            <h3 className="mb-5 title">Genre Distribution</h3>
            {genreData && <GenreChart data={genreData}/>}

            <h3 className="mb-5 title">Best-sellers</h3>
            {bestSellers && <BestSellers data={bestSellers}/>}

            <div className="d-flex justify-content-between align-items-center gap-3">
                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3"></div>
                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3"></div>
                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3"></div>
            </div>
            
            <h3 className="mb-5 title">Monthly Revenues</h3>
            {monthlyRevenues && <MonthlyRevenues data={monthlyRevenues}/>}


            
            <div className="mt-4">
                <h3 className="mb-5 title">Recent Orders</h3>
                <div>
                    <Table columns={columns} dataSource={data1} />
                </div>
            </div>
        </div>
    );
};

export default Revenue;
