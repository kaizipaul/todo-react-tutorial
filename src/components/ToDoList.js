import React from 'react';
import TodoItem from './toDoItem';

const TodoList = ({ todos, toggleTodo }) => (
  todos.map((todo) => <TodoItem key={todo.id} toggleTodo={toggleTodo} todo={todo} />)
);

export default TodoList;
