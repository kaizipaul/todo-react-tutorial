import React, { useState, useRef } from 'react';
import Header from './Header';
import TodoList from './ToDoList';

function TodoContainer() {
  const [todos, setTodos] = useState([]);
  const todoRef = useRef();
  let index = 0;

  const toggleTodo = (id) => {
    const newTodo = [...todos];
    const todo = newTodo.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodo);
  };

  const addTodo = () => {
    const task = todoRef.current.value;
    if (task === '') return;
    setTodos((...prevTodos) => [...prevTodos, { id: index, task, complete: false }]);
    todoRef.current.value = null;
    index += 1;
  };

  const clearTodos = () => {
    const newTodo = todos.filter((todo) => !todo.complete);
    setTodos(newTodo);
  };

  return (
    <div>
      <Header />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoRef} type="text" />
      <button type="button" onClick={addTodo}>Add Task</button>
      <button type="button" onClick={clearTodos}>Clear Tasks</button>
    </div>
  );
}

export default TodoContainer;
