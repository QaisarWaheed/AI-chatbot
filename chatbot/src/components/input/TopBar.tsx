import { useNavigate } from "react-router";
import { logoutIcon } from "../Icons/svgs";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 h-16">
      <label className="p-4  left-0 top-0 font-bold text-custom-button text-2xl ">
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
