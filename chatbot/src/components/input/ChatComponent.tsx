import React, { useState } from "react";
import { micIcon } from "../Icons/svgs";

const ChatComponent = () => {
  const [prompt, setPrompt] = useState("");
  return (
    <div className="w-[768px] h-[214px] flex flex-col justify-center  mt-11 bg-white relative ">
      <div className="bg-black w-full flex justify-center mb-3">
        <label className="text-custom-button absolute top-6 text-2xl font-bold">
          I'm here to listen. What's bothering you?
        </label>
      </div>
      <div>
        <textarea
          placeholder="Ask Any Thing"
          className="w-full flex rounded-xl border p-3 mb-6 h-16 placeholder:text-custom-gray-2 "
          value={prompt}
          onChange={(event) => {
            setPrompt(event.target.value);
          }}
        />
      </div>
      <div className="space-x-16 absolute -left-0 w-full mt-24">
        <label className="text-custom-button    h-11 text-xl px-4 py-1 border rounded">
          Case Studies
        </label>
        <label className="text-custom-button    h-11 px-4 py-1  text-xl border rounded">
          Articles
        </label>
        <label className="text-custom-button    h-11 px-4 py-1 text-xl border rounded">
          Exercises
        </label>

        <button className=" bg-custom-button absolute w-24 h-8 flex right-0 top-0 rounded-xl border hover:bg-blue-500 gap-2 text-white  justify-center items-center align-middle ">
          {micIcon} voice
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
