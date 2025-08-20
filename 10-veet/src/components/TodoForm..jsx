import React, { useState } from 'react';
import { useTodo } from '../context/Todo';

function TodoForm() {
  const [input, setInput] = useState('');
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    addTodo({ todo: trimmed, Checked: false });
    setInput('');
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-blue-500 text-white shrink-0 border-l-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;

