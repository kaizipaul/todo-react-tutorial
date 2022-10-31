/* eslint-disable react/prop-types */
import React from 'react';

function TodoItem({ todo, toggleTodo }) {
  const handleClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <input type="checkbox" checked={todo.complete} onChange={handleClick} />
      {todo.name}
    </div>
  );
}

export default TodoItem;
