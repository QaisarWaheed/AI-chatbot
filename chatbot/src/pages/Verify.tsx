import { useNavigate } from "react-router";
import Tabs from "../components/input/Tabs";
import { useState } from "react";
import { EmailIcon } from "../components/Icons/svgs";
import OTP from "../components/input/Otp";

const Verify = () => {
  const navigate = useNavigate();
  const [isDisabled, setisDisabled] = useState(false);
  const [text, setText] = useState("Send OTP");
  const [otp, setOtp] = useState("");

  return (
    <div className=" flex justify-center items-center align-middle w-full h-screen">
      <form className="w-[700px] flex flex-col gap-6">
        <Tabs
          onTabClick={(tab) => {
            console.log("Clicked", tab);
            if (tab === "Login") {
              navigate("/login");
            }
            if (tab === "Register") {
              navigate("/Signup");
            }
          }}
          activeTab="Register"
          options={["Login", "Register"]}
        />
        <div className="flex relative w-full">
          <div className="w-96">
            <OTP
              placeholder="OTP"
              type="text"
              icon={EmailIcon}
              value={otp}
              onChange={(event) => {
                setOtp(event.target.value);
              }}
            />
          </div>
          <button
            onClick={(event) => {
              setisDisabled(true);
              setText("Sent!");
              console.log();
            }}
            disabled={isDisabled}
            className={`h-11 font-bold py-2 px-4 rounded shadow w-36 absolute right-0 
              ${
                isDisabled
                  ? "bg-white-600 text-gray-500"
                  : "bg-custom-button hover:bg-blue-700"
              } 
              text-white`}
          >
            {text}
          </button>
        </div>
        <button className="h-11 bg-custom-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow w-full">
          Verify
        </button>
        <div className="flex justify-center align-middle space-x-1">
          <label className="text-custom-text">Already have an Account?</label>
          <a href="/login" className="hover:text-blue-400 font-normal">
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default Verify;
