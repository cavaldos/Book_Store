import React, {Component} from 'react'
import UserDataService from '../../services/UserDataService';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const columns = [
  { 
    field: 'username', 
    headerName: 'Username', 
    width: 100,
    renderCell: (params) => (
      <Link to={`/manage-user/${params.row.username}`}>{params.row.username}</Link>
    )
  },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'fullname',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
    valueGetter: function(params) {
      return `${params.row.firstname || ''} ${params.row.lastname || ''}`;
    }
  },
  { field: 'phonenumber', headerName: 'Phone number', width: 120 },
];

export default class UserList extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
        };
        this.getAllUsers = this.getAllUsers.bind(this);
    }
    
    componentDidMount() {
        this.getAllUsers();
    };

    getAllUsers(){
        UserDataService.getAll()
            .then(response => {
                this.setState({
                    users: response.data,
                }, () => {
                    console.log(this.state.users);
                })
            })
            .catch(error => console.log(error))
    }

    render() {
    return (
      <div style={{ height: 'inherit', width: '100%' }}>
        <h2>Users</h2>
        <DataGrid
        rows={this.state.users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        pageSizeOptions={[20, 30]}
        checkboxSelection
      />
      </div>
    );
  }
}

