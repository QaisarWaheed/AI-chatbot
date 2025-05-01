import { useState } from "react";
import { useNavigate } from "react-router";
import Tabs from "../components/input/Tabs";
import InputField from "../components/input/InputField";
import {
  CalendarIcon,
  EmailIcon,
  Invisible,
  PasswordIcon,
  UserIcon,
  visibleIcon,
} from "../components/Icons/svgs";

import PasswordField from "../components/input/PasswordField";
import RadioInput from "../components/input/RadioInput";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setuserName] = useState("");
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      email.length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      password.length > 0 &&
      confirmpassword === password &&
      gender != null &&
      dob != null
    ) {
      navigate("/verify");
    } else {
      console.log("Some thing is missing or email is in incorrect format");
      console.log(email);
      console.log(password);
      console.log(gender);
      console.log(username);
      console.log(dob);
    }
  };

  return (
    <>
      <div className="flex  justify-center items-center align-middle w-full h-screen">
        <form className="w-[700px] flex flex-col gap-6" onSubmit={handleSubmit}>
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
            icon={UserIcon}
            placeholder="UserName"
            type="text"
            value={username}
            onChange={(event) => {
              setuserName(event.target.value);
            }}
          />
          <InputField
            icon={EmailIcon}
            placeholder="Email"
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <PasswordField
            icon={PasswordIcon}
            visibiltyIcon={Invisible}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <PasswordField
            icon={PasswordIcon}
            visibiltyIcon={visibleIcon}
            placeholder="ConfirmPassword"
            type="password"
            value={confirmpassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
          <InputField
            icon={CalendarIcon}
            placeholder="DateOfBirth"
            type="date"
            value={dob}
            onChange={(event) => {
              setDOB(event.target.value);
            }}
          />
          <div className="flex ">
            <label htmlFor="Gender" className="text-custom-text mr-6">
              Gender:
            </label>
            <RadioInput
              name="options"
              label="Male"
              value="male"
              onChange={(event) => {
                setGender(event.target.value);
              }}
            />
            <RadioInput
              name="options"
              label="Female"
              value="female"
              onChange={(event) => {
                setGender(event.target.value);
              }}
            />
            <RadioInput
              name="options"
              label="Custom"
              value="custom"
              onChange={(event) => {
                setGender(event.target.value);
              }}
            />
          </div>
          <br></br>
          <button
            type="submit"
            className="bg-custom-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow w-full"
          >
            SingUp
          </button>
          <br></br>
          <div className="flex justify-center align-middle space-x-1">
            <label className="text-custom-text">Already have an Account?</label>
            <a href="/login" className="hover:text-blue-400 font-normal">
              Login
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
