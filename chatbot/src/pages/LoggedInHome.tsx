import { useState } from "react";
import { useNavigate } from "react-router";
import { LogoutHoverIcon, micIcon } from "../components/Icons/svgs";

const Home = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");

  return (
    <div className=" w-full h-screen flex justify-center align-middle items-center">
      <div className="border rounded  ">
        <label className=" absolute left-0 top-0 font-bold text-custom-button text-2xl mt-2">
          MindBuddy
        </label>
        <div className="absolute right-0 top-0 mt-2 text-2xl  font-bold flex gap-x-3  text-custom-button  mr-3">
          <button
            className=" flex items-center
            gap-x-3 hover:text-blue-400"
            onClick={() => {
              navigate("/login");
            }}
          >
            Logout {LogoutHoverIcon}
          </button>
        </div>
      </div>

      <div className="w-[768px] h-[214px] flex flex-col justify-center  mt-11 bg-white relative ">
        <div className="bg-black w-full flex justify-center mb-3">
          <label className="text-custom-button absolute top-6 text-2xl font-bold">
            I'm here to listen. What's bothering you?
          </label>
        </div>
        <div>
          <textarea
            placeholder="Ask Any Thing"
            className="w-full flex rounded-xl border p-3  mb-6 h-16 placeholder:text-custom-gray-2"
            value={prompt}
            onChange={(event) => {
              setPrompt(event.target.value);
            }}
          />
        </div>
        <div className="space-x-16 absolute -left-0 w-full mt-24">
          <label className="text-custom-button    h-11 text-xl px-4 py-1">
            Case Studies
          </label>
          <label className="text-custom-button    h-11 px-4 py-1  text-xl">
            Articles
          </label>
          <label className="text-custom-button    h-11 px-4 py-1 text-xl ">
            Exercises
          </label>
          <button className=" bg-custom-button absolute w-24 h-8 flex right-0 top-0 rounded-xl border hover:bg-blue-500 gap-2 text-white  justify-center items-center align-middle  ">
            {micIcon} voice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
