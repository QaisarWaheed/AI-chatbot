import { useNavigate } from "react-router";
import { logoutIcon } from "../Icons/svgs";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 bg-white h-16">
      <label className="p-4 absolute left-0 top-0 font-bold text-custom-button text-2xl ">
        MindBuddy
      </label>
      <div className="absolute right-0 top-0 text-2xl font-bold flex gap-3 text-custom-button">
        <button
          className=" p-4 flex gap-3 "
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
