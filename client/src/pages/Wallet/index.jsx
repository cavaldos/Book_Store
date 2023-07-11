// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     {
//         field: 'age',
//         headerName: 'Age',
//         type: 'number',
//         width: 90,
//     },
//     {
//         field: 'fullName',
//         headerName: 'Full name',
//         description: 'This column has a value getter and is not sortable.',
//         sortable: false,
//         width: 160,
//         valueGetter: (params) =>
//             `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
// ];

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function Wallet() {
//     return (
//         <div style={{ height: 400, width: '100%' }}>
//             <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 initialState={{
//                     pagination: {
//                         paginationModel: { page: 0, pageSize: 5 },
//                     },
//                 }}
//                 pageSizeOptions={[5, 10]}
//                 checkboxSelection
//             />
//         </div>
//     );
// }

import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { GiBodyBalance, GiCityCar } from "react-icons/gi";
import { IoIosWallet } from "react-icons/io";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";
import { Analytics } from "../../components/walletUI/Analytics";
import InfoCard from "../../components/walletUI/infoCard";
import MonthlySpend from "../../components/walletUI/MonthlySpend";
import SectorExpance from "../../components/walletUI/SectorExpance";
import {
  CardWrapper,
  Container,
  Header1,
  Header2,
  Main,
  SideContainer,
} from "../../components/walletUI/styles";
import {
  darkBlue,
  darkGreen,
  darkRed,
  lightBlue,
  lightGreen,
  lightRed,
} from "../../components/walletUI/styles/colors";

function Wallet() {
  const balance = 1000;
  const currency = "$";
  const income = 500;
  const expense = 600; // Thay đổi expance thành expense
  return (
    <Main>
      <Container>
        <Header1>Financial Overview</Header1>
        <Header2>My Balance</Header2>
        <CardWrapper>
          <InfoCard
            type="balance"
            money={balance}
            color="blue"
            devise={currency}
          >
            <IoIosWallet size={40} color={darkBlue} />
          </InfoCard>
          <InfoCard
            type="Income"
            money={income}
            color="green"
            devise={currency}
          >
            <TiArrowUpThick size={40} color={darkGreen} />
          </InfoCard>
          <InfoCard
            type="Expenses" // Thay đổi Expances thành Expenses
            money={expense}
            color="red"
            devise={currency}
          >
            <TiArrowDownThick size={40} color={darkRed} />
          </InfoCard>
        </CardWrapper>
        <Analytics />
      </Container>
      <SideContainer>
        <Header1>Monthly spend limit</Header1>
        <MonthlySpend
          bgColor={lightBlue}
          color={darkBlue}
          title="250$"
          percentage="80" 
          about="Hobbies"
        >
          <GiBodyBalance size={40} color={darkBlue} />
        </MonthlySpend>
        <MonthlySpend
          bgColor={lightGreen}
          color={darkGreen}
          title="450$"
          percentage="50" // Thay đổi percantage thành percentage
          about="Transport"
        >
          <GiCityCar size={40} color={darkGreen} />
        </MonthlySpend>
        <MonthlySpend
          percentage="20" // Thay đổi percantage thành percentage
          color={darkRed}
          about="Shopping"
          bgColor={lightRed}
          title="350$"
        >
          <AiFillShopping size={40} color={darkRed} />
        </MonthlySpend>
        <SectorExpance />
      </SideContainer>
    </Main>
  );
}

export default Wallet;
