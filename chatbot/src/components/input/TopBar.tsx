import { useNavigate } from "react-router";
import { logoutIcon } from "../Icons/svgs";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <label className=" absolute left-0 top-0 font-bold text-custom-button text-2xl mt-2  ">
        MindBuddy
      </label>
      <div className="absolute right-0 top-0 mt-2 text-2xl  font-bold flex gap-x-3  text-custom-button  mr-3">
        <button
          className=" flex
        gap-x-3 "
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
