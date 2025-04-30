import { useNavigate } from "react-router";
import { logoutIcon } from "../Icons/svgs";
import React from "react";
const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div className="relative m-4 p-4">
      <label className="absolute left-0 top-0 font-bold text-custom-button text-2xl ">
        MindBuddy
      </label>
      <div className="absolute right-0 top-0 text-2xl font-bold flex gap-3 text-custom-button">
        <button
          className=" flex gap-3 "
          onClick={() => {
            navigate("/login");
          }}
        >
          Login {logoutIcon}
        </button>
      </div>
    </div>
  );
};

export default TopBar;
