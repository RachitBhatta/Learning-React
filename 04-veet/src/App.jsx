import { useState } from 'react';

function App() {
  const [color, setColor] = useState("bg-green-400"); // Tailwind class

  const colors = [
    { name: "Red", class: "bg-red-400", text: "text-white" },
    { name: "Blue", class: "bg-blue-400", text: "text-black" },
    { name: "Coral", class: "bg-rose-400", text: "text-white" },
    { name: "Green", class: "bg-green-400", text: "text-black" },
    { name: "Yellow", class: "bg-yellow-400", text: "text-white" },
    { name: "Orange", class: "bg-orange-400", text: "text-black" },
  ];

  return (
    <div className={`w-full h-screen duration-200 ${color}`}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-4xl px-4 py-4">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setColor(c.class)}
              className={`outline-none px-5 py-3 rounded-4xl shadow-sm gap-3 font-bold ${c.class} ${c.text} hover:scale-105 transition-transform duration-200`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

