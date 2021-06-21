import React, { useState, useEffect } from 'react';
import './App.css';
import TodoListView from './TodoListView/TodoListView';
import axios from 'axios';

function App() {
  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
      .then(res => {
        setTodoList(res.data)
      })
  });

  const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/todo/', { 'title': title, 'description': desc })
      .then(res => console.log(res))
  }
  const updateTodoHandler = () => {
    axios.put(`http://localhost:8000/api/todo/${title}/${desc}`)
      .then(res => console.log(res))
  }

  return (
    <div className="App">
      <h1 style={{fontFamily:'verdana'}}>Todo App</h1>
      <TodoListView todoList={todoList} />
      <p style={{fontFamily:'verdana', fontSize:'16px'}}>Add todo</p>
      <p><input onChange={event => setTitle(event.target.value)} placeholder='Title' style={{width:'200px',padding:'10px',borderRadius:'8px'}}/> <input onChange={event => setDesc(event.target.value)} placeholder='Description' style={{width:'200px',padding:'10px',borderRadius:'8px'}}/><span><button onClick={addTodoHandler} style={{ color: 'white',backgroundColor: '#4CAF50',fontSize: '14px', margin: '8px 4px', padding: '10px 12px', borderRadius: '4px', textAlign: 'center'}}>Add</button></span><span><button onClick={updateTodoHandler} style={{ color: 'white',backgroundColor: '#008CBA',fontSize: '14px', margin: '8px 4px', padding: '10px 12px', borderRadius: '4px', textAlign: 'center'}}>Update</button></span></p>
    </div>
  );
}

export default App;