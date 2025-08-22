import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-white shadow-md w-full py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-600">
          🚀 My Vite + Tailwind App
        </h1>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center gap-6">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Hello, Tailwind + Vite!
        </h2>

        <p className="text-lg text-gray-600 max-w-md text-center">
          This project is styled with{" "}
          <span className="font-semibold">Tailwind CSS</span>. You can now start
          customizing your <code>App.jsx</code> and explore utility classes.
        </p>

        <button className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition">
          Click Me
        </button>
      </main>

      <footer className="w-full py-4 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} My Project — Powered by Vite & Tailwind
      </footer>
    </div>
  );
}

export default App;
