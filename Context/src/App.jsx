// // App.js
// import React, { useContext } from "react";
// import { ThemeProvider, ThemeContext } from "./ThemeContext";

// function ChildComponent() {
//   // 3. Consume Context
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <div
//       style={{
//         background: theme === "light" ? "#fff" : "#333",
//         color: theme === "light" ? "#000" : "#fff",
//         padding: "20px",
//         borderRadius: "8px",
//       }}
//     >
//       <h2>Current Theme: {theme}</h2>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <ThemeProvider>
//       <ChildComponent />
//     </ThemeProvider>
//   );
// }

//Recoil/Redux Example
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterState } from "./store/counterAtom";

function Counter() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default function App() {
  return <Counter />;
}
