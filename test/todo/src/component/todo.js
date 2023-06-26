import React from 'react';
import Button from '@mui/material/Button';

function Todo({todo}) {
    return (
        <>
            <Button variant="outlined" >
                {todo.name}
            </Button>
        </>
    );
}

export default Todo;