import React, { useState } from "react";
import OTP from "../components/input/Otp";
import {
  EmailIcon,
  Invisible,
  PasswordIcon,
  visibleIcon,
} from "../components/Icons/svgs";
import { useNavigate } from "react-router";
import Tabs from "../components/input/Tabs";
import InputField from "../components/input/InputField";
import PasswordField from "../components/input/PasswordField";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isDisabled, setisDisabled] = useState(false);
  const [text, setText] = useState("Send OTP");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
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
        <InputField
          type="text"
          placeholder="Email"
          icon={EmailIcon}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
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
        <PasswordField
          type="password"
          visibiltyIcon={visibleIcon}
          placeholder="New Password"
          value={password}
          icon={PasswordIcon}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <PasswordField
          type="password"
          visibiltyIcon={Invisible}
          placeholder="Confirm New Password"
          value={password}
          icon={PasswordIcon}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
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

export default ForgotPassword;
