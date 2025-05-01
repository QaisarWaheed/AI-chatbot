import React, { CSSProperties, Fragment, useState } from "react";
import { micIcon } from "../Icons/svgs";
import { ScaleLoader } from "react-spinners";

const ChatComponent = () => {
  const [prompt, setPrompt] = useState("");

  const [isVoiceMode, setIsVoiceMode] = useState(false);

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  if (isVoiceMode) {
    return (
      <div>
        <ScaleLoader
          color={"blue"}
          loading={true}
          cssOverride={override}
          height={100}
          width={5}
          speedMultiplier={0.5}
          barCount={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

        <div className="   right-[50%] bottom-[24px] bg-red-200 text-center">
          <button>Mic</button>
          <button onClick={() => setIsVoiceMode(false)}>X</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-md shadow-2xl">
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
      <div className="flex justify-between align-middle">
        <div className="flex gap-4">
          <button className="text-custom-button p-2 border rounded-md">
            Case Studies
          </button>
          <button className="text-custom-button p-2  border rounded-md">
            Articles
          </button>
          <button className="text-custom-button p-2 border rounded-md">
            Exercises
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsVoiceMode(true)}
          className=" bg-custom-button p-4 w-24 h-8 flex right-0 top-0 rounded-md border hover:bg-blue-500 gap-2 text-white  justify-center items-center align-middle "
        >
          {!!prompt ? <>Submit </> : <>{micIcon} voice</>}
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
