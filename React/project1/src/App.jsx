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

import React from "react";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    alert("Hii");
  }, []);
  return (
    <div>
      <h1>Use Effect Hook Example</h1>
      <p>This is a simple example of using the useEffect hook in React.</p>
    </div>
  );
};

export default App;
