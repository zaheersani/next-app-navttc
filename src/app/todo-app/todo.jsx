import React, { useState } from 'react';

const TodoApp = () => {
    const [todoList, setTodoList] = useState([
        {task: 'item1', completed: false},
        {task: 'item1', completed: true}
    ]);

    console.log(todoList);
    // const [todoList, setTodoList] = useState(['item1', 'item2']);
    // const todoList = ['item1', 'item3'];

    let [todo, setTodo] = useState('');

    // console.log(todoList);

    const handleTodoAdd = () => {
        setTodoList([
            ...todoList, 
            { 
                task: todo.trim(),
                completed: false
            }
        ]);
        // Reset Input Box
        setTodo('');
    }

    const handleTodoDelete = (e) => {
        setTodoList(todoList.filter((item, index) => index !== e));
    }

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <h1>TODO App</h1>
            <input 
                value={todo}
                type="text" 
                placeholder="Add a new task" 
                style={{ padding: '8px', width: '70%' }}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button 
                disabled={todo.trim().length <= 0}
                onClick={handleTodoAdd}
                style={{ padding: '8px 12px', marginLeft: '8px' }}
            >Add</button>
            {todoList.length === 0 && <p>No tasks available</p>}
            {todoList.map( (item, index) => (
                <div key={index} style={{width: '30%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                    <input 
                        type='checkbox' 
                        checked={item.completed}
                    />
                    <p style={{textDecoration: item.completed ? 'line-through' : 'none'}} >{item.task}</p>
                    <button
                        onClick={() => handleTodoDelete(index)}
                    >Delete</button>
                </div>
                )
            )}
        </div>
    )
}

export default TodoApp;