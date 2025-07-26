import React, { useCallback, useState } from "react";

function Alert({ showAlert }) {
  return <button onClick={showAlert}>Show Alert</button>;
}
function Assignment2() {
  const [inputText, setInputText] = useState("");

  const showAlert = useCallback(() => {
    alert(`You entered: ${inputText}`);
  }, [inputText]);

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Alert showAlert={showAlert} />
    </div>
  );
}

export default Assignment2;
