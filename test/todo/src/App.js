import './App.css';
import { useState } from 'react';
import React from 'react';

import TodoList from './component/TodoList';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {v4} from 'uuid';
function App() {

  const [todoList, setTodoList] = useState([])
  const [textinput, setTextinput] = useState('')
  const onTextInputChange = (e) => {
    setTextinput(e.target.value);
  }
  const onAddbtn = (e) => {
    // setTodoList([
    //   ...todoList,
    //   { id: todoList.length + 1, title: textinput, status: 'new' }
    // ])
    // setTextinput('')

    setTodoList([...todoList, { id: "", name: textinput, isCompletes: false, status: "new" }]);
  }
  return (
    <>
      <h1>danh sach can lam</h1>
      <TextField
        id="outlined-basic"
        placeholder='Them viec can lam'
        value={textinput}
        onChange={onTextInputChange}
      >
      </TextField>
      <Button apperance="primary"
        onClick={onAddbtn}
      >
        them
      </Button>
      <div>

        <TodoList todoList={todoList} />
      </div>
    </>
  );
}

export default App;
