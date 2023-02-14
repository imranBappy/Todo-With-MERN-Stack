import { useEffect, useState } from "react";
import Add from "./Todo/Add";
import Todo from "./Todo/Todo";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([{ id: 1, note: "Programming", isDone: false }, { id: 2, note: "Codeing", isDone: true }, { id: 23, note: "Codeing", isDone: true }, { id: 2, note: "Studey", isDone: false }])

  // const url = "https://imrans-note.onrender.com/";


  useEffect(() => {
    axios.get('/api')
      .then(res => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch(err => {
        console.log("error", err);
      })

  }, [])
  const handleAdd = (task) => {
    setTodos([...todos, { id: 1, task: task, isDone: false }])
    fetch('/api', {
      method: "POST",
      headers: {
        'Content-Type':
          'application/json;charset=utf-8'
      },
      body: JSON.stringify({ task: task })
    })
  }

  const handeleComplate = (index) => {
    todos[index].isDone = true;

    setTodos([...todos])
    console.log(todos[index]._id);
    fetch(`${'/api'}?id=${todos[index]._id}`, {
      method: 'PATCH'
    })
  }

  const handeleDelete = (id) => {
    const find_task = todos.filter(todo => todo._id !== id)
    setTodos([...find_task])
    fetch(`${'/api'}?id=${id}`, {
      method: 'DELETE'
    })
  }

  return (
    <>
      <main className="bg-slate-900 min-h-screen">
        <h1 className="main-title">Imran's Note</h1>
        <Add handleAdd={handleAdd} />
        <div className=" max-w-4xl bg-slate-800 m-auto pb-1 mb-2">
          <div className="mt-3">
            <h3 className="heading">Active Task</h3>
            <ul className="mx-2">
              {
                todos.map((todo, id) => !todo.isDone && <Todo todo={todo} handeleComplate={handeleComplate} index={id} key={id} />)
              }
            </ul>
          </div>
          <div>
            <h3 className="heading" >Complated Task</h3>
            <ul className="mx-2">
              {
                todos.map((todo, id) => todo.isDone && <Todo todo={todo} key={id} handeleDelete={handeleDelete} />)
              }
            </ul>
          </div>
        </div>
        <footer className="bg-slate-800">
          <p className="text-white text-center py-3">Develop By <a href="imranbappy.me">Imran Hossen</a></p>
        </footer>
      </main >
    </>
  );
}

export default App;
