import axios from 'axios'
import React from 'react'

export default function Todo(props) {
    const deleteTodoHandler = (title) => {
        axios.delete(`http://localhost:8000/api/todo/${title}`)
            .then(res => console.log(res))
    }
    return (
        <div style={{ display: "flex", justifyContent: 'center' }}>
            <div style={{ width: "500px" }}>
                <p><span style={{ fontWeight: 'bold', fontStyle:'courier' }}>{props.todo.title} : </span> <span style={{fontStyle:'courier'}}>{props.todo.description}</span> <button onClick={() => deleteTodoHandler(props.todo.title)} style={{ color: 'white',backgroundColor: '#f44336',fontSize: '14px', margin: '8px 4px', padding: '10px 12px', borderRadius: '4px', textAlign: 'center'}}>Delete</button></p>
            </div>
        </div>
    )
}