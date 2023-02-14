import React, { useState } from 'react';

const Add = (props) => {
    const [task, setTask] = useState("");
    const handleTask = (e) => {
        e.preventDefault()
        props.handleAdd(task)
        setTask("")
    }
    return (
        <form onSubmit={handleTask} className='flex rounded justify-between max-w-4xl bg-slate-800 m-auto p-3  my-2 '>
            <input onChange={(e) => setTask(e.target.value)} value={task} type="text" placeholder='Enter you task ' className='p-2 bg-slate-900 w-4/5 rounded text-white  focus:outline-none' />
            <button className='ring-2 ring-blue-500 rounded text-white font-semibold w-36'>Add</button>
        </form >
    );
};

export default Add;