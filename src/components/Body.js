import React, { useState } from "react";

function Body() {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");

  return (
    <div
      className="w-96 h-96 mx-auto my-16 border border-black flex items-center justify-center flex-col rounded-lg shadow-lg"
      style={{ backgroundColor: text  }}
    >
      <div className="flex items-center justify-center flex-col">
        <input
          value={text1}
          onChange={(e) => {
            setText1(e.target.value);
          }}
          className="border border-black rounded-lg p-2 w-full shadow-lg"
          placeholder="Enter color"
          type="text"
        />
        <button
          onClick={() => {
            setText(text1);
          }}
          className="m-4 p-2 border border-black rounded-lg bg-slate-100 hover:bg-slate-200  font-bold shadow-lg"
        >
          Add backgroundColor
        </button>
      </div>
    </div>
  );
}

export default Body;
