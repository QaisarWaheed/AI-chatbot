import { useState } from "react";
import Tabs from "../components/input/Tabs";
import { useNavigate } from "react-router";
import InputField from "../components/input/InputField";
import { EmailIcon, PasswordIcon, visibleIcon } from "../components/Icons/svgs";
import PasswordField from "../components/input/PasswordField";
import { userAuth } from "../components/input/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login, logout, isAuthenticated } = userAuth();

  const handleLogin = () => {
    const UserData = {
      id: "123",
      email: "qaiserwaheed00@gmail.com",
      password: "hell",
    };
    if (email === UserData.email && password === UserData.password) {
      navigate("/home");
    }
    login(UserData);
  };

  return (
    <div className="flex  justify-center items-center align-middle w-full h-screen">
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
          activeTab="Login"
          options={["Login", "Register"]}
        />

        <InputField
          placeholder="Email"
          type="text"
          icon={EmailIcon}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <PasswordField
          placeholder="Password"
          type="password"
          icon={PasswordIcon}
          value={password}
          visibiltyIcon={visibleIcon}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className=" flex w-full text-right relative space-x-2">
          <input type="checkbox" className="absoltue left-0" />
          <label htmlFor="Remeber me" className="absoltue left-0">
            Remember me
          </label>

          <label
            htmlFor="ForGotPassword"
            className="absolute right-0 hover:text-blue-400"
          >
            <a
              href="/ForgotPassword"
              className="text-blue-400 hover:text-blue-800"
            >
              Forgot Password?
            </a>
          </label>
        </div>
        <button
          className="bg-custom-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow w-full"
          onClick={handleLogin}
        >
          Login
        </button>
        <div className="flex justify-center space-x-4">
          <label htmlFor="newAccount">Don't have an Account?</label>
          <a href="/signup" className="text-blue-400 hover:text-blue-800">
            Create one
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
