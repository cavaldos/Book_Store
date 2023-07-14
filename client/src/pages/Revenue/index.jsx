import React from 'react';
import { Column } from '@ant-design/plots';
import { Table } from 'antd';
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
    const data = [
        {
            type: 'Jan',
            sales: 38,
        },
        {
            type: 'Feb',
            sales: 52,
        },
        {
            type: 'Mar',
            sales: 61,
        },
        {
            type: 'Apr',
            sales: 145,
        },
        {
            type: 'May',
            sales: 48,
        },
        {
            type: 'Jun',
            sales: 38,
        },
        {
            type: 'July',
            sales: 38,
        },
        {
            type: 'Aug',
            sales: 38,
        },
        {
            type: 'Sept',
            sales: 38,
        },
        {
            type: 'Oct',
            sales: 38,
        },
        {
            type: 'Nov',
            sales: 38,
        },
        {
            type: 'Dec',
            sales: 38,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
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
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center gap-3">
                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3"></div>
                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3"></div>
                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3"></div>
            </div>
            <div className="mt-4">
                <h3 className="mb-5 title">Income Statics</h3>
                <div>
                    <Column {...config} />
                </div>
            </div>
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
