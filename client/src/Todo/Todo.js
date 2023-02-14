import React from 'react';
import { MdDoneAll } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

const Todo = (props) => {
    const todo = props.todo;
    return (<li className="todo flex justify-between rounded-md">
        {todo.task} {todo.isDone ?
            < MdDelete className='  cursor-pointer' onClick={() => props.handeleDelete(todo._id)} /> :
            <MdDoneAll className='  cursor-pointer' onClick={() => props.handeleComplate(props.index)} />}  </li>);
};

export default Todo;