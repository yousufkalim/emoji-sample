import React, { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  const handleEmojiSelect = (emoji) => {
    setInputText(inputText + emoji.native);
  };

  return (
    <div className="app">
      <Picker data={data} onEmojiSelect={handleEmojiSelect} />

      <div className="container">
        <div className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button onClick={() => setResult(inputText)}>Add</button>
        </div>
        <div>
          <p style={{ fontWeight: "bold" }}>Result</p>
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
