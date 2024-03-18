import React, { useState } from "react";

function Body() {
  const [text, setText] = useState("");
  const [click, setClick] = useState(false);

  return (
    <div
      className="w-96 h-96 m-auto border border-black flex items-center justify-center flex-col rounded-lg "
      style={{ backgroundColor: text }}
    >
      <input
        value={text}
        onChange={(e) => {
          click && setText(e.target.value);
        }}
        className="border border-black rounded-lg p-2 w-8/12"
        placeholder="Enter a color"
        type="text"
      />
      <button
        className="m-4 border border-black rounded-lg p-2"
        onClick={() => {
          setClick(true);
          setText(text);
        }}
      >
        Add Color To Background
      </button>
    </div>
  );
}

export default Body;
