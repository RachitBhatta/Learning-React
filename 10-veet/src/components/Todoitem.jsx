import React, { useState } from 'react';
import { useTodo } from '../context/Todo';

function TodoItem({ todo }) {
  const [edit, setEdit] = useState(false);
  const [msg, setMsg] = useState(todo.todo);
  const { update, deleteTodo, complete } = useTodo();

  const editTodo = () => {
    const trimmed = msg.trim();
    if (!trimmed) return;
    update(todo.id, { ...todo, todo: trimmed });
    setEdit(false);
  };

  const toggleComplete = () => {
    complete(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm duration-300 text-black ${
        todo.Checked ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={!!todo.Checked}
        onChange={toggleComplete}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          edit ? 'border-black/10 px-2' : 'border-transparent'
        } ${todo.Checked ? 'line-through' : ''}`}
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        readOnly={!edit}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.Checked) return;
          if (edit) editTodo();
          else setEdit(true);
        }}
        disabled={todo.Checked}
      >
        {edit ? '💾' : '✏️'}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;


