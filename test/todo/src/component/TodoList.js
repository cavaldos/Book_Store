import React from 'react';
import Todo from './todo';
export default function TodoList({ todoList }) {

    return (
        <>
            {
                todoList.map((todo) => {
                    <Todo key={todo.id} todo={todo} />
                }
                )
            }

        </>
    );
}
