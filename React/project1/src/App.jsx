// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <CustomButton count={count} setCount={setCount} />
//     </>
//   );
// }

// function CustomButton(props) {
//   function onClickHandler() {
//     props.setCount(props.count + 1);
//   }
//   return <button onClick={onClickHandler}>Counter : {props.count}</button>;
// }

// export default App;

//Use Effect Hook Example

// import React from "react";
// import { useEffect } from "react";
// const App = () => {
//   useEffect(() => {
//     alert("Hii");
//   }, []);
//   return (
//     <div>
//       <h1>Use Effect Hook Example</h1>
//       <p>This is a simple example of using the useEffect hook in React.</p>
//     </div>
//   );
// };

// export default App;

//useEffect with Dependency Example

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// const App = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos")
//       .then(function (response) {
//         console.log("API Response:", response.data);
//         setTodos(response.data);
//       })
//       .catch(function (error) {
//         console.error("Error fetching todos:", error);
//       });
//   }, []);

//   return (
//     <div>
//       {todos.map((todo) => (
//         <Todo title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// };
// function Todo({ title, description }) {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </div>
//   );
// }

// export default App;

//useMemo Example

import React from "react";

export const App = () => {
  return (
    <div>
      <input type="text" />
      <button>Counter</button>
    </div>
  );
};
