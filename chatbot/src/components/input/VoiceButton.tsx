import { useState } from "react";

const VoiceButton = () => {
  const [isListening, setisListening] = useState(false);

  const Listening = () => {
    setisListening(true);
  };

  const cancel_listening = () => {
    setisListening(false);
  };

  return (
    <div>
      <button className=" bg-custom-button absolute w-24 h-8 flex right-0 top-0 rounded-xl border hover:bg-blue-500 gap-2 text-white  justify-center items-center align-middle ">
        Voice
      </button>
    </div>
  );
};

export default VoiceButton;
