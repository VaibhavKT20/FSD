import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React from "react";
import Dashboard from "../components/Dashboard";
import Landing from "../components/landing";
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <div
//         style={{
//           background: "black",
//           color: "white",
//           padding: "10px",
//           textAlign: "center",
//         }}
//       >
//         <h1>React Router DOM Example</h1>
//       </div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/" element={<Landing />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div>
//       <div>
//         <button
//           onClick={() => {
//             window.location.href = "/";
//           }}
//         >
//           Landing page
//         </button>
//         <button
//           onClick={() => {
//             window.location.href = "/dashboard";
//           }}
//         >
//           Dashboard
//         </button>
//       </div>

//       <BrowserRouter>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/" element={<Landing />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar></Appbar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

  function Appbar() {
    const navigate = useNavigate();
    return (
      <div>
        <div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Landing
          </button>
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Dashboard
          </button>
        </div>
      </div>
    );
  }
}

export default App;

