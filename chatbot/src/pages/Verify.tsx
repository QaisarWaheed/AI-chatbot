import { useNavigate } from "react-router";
import Tabs from "../components/input/Tabs";
import { FormEvent, useState } from "react";
import { EmailIcon } from "../components/Icons/svgs";
import OTP from "../components/input/Otp";
import { generateOTP } from "../components/input/functions/OtpGenerator";

const Verify = () => {
  const navigate = useNavigate();

  const [generatedOTP, setGeneratedOTP] = useState<string | null>(null);
  const [otp, setOTP] = useState("");

  const handleGenerateOTP = () => {
    const newOTP = generateOTP();
    setGeneratedOTP(newOTP);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(generateOTP);

    if (generatedOTP !== otp) return;

    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center align-middle w-full h-screen">
      <form
        className="w-[700px] flex flex-col gap-6"
        onSubmit={(e) => handleSubmit(e)}
      >
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
              onChange={(e) => setOTP(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={() => handleGenerateOTP()}
            className={`h-11 font-bold py-2 px-4 rounded shadow w-36 absolute right-0 bg-custom-button hover:bg-blue-700 text-white`}
          >
            {generatedOTP ? "Resend OTP" : "Send OTP"}
          </button>
        </div>
        <button
          type="submit"
          className="h-11 bg-custom-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow w-full"
        >
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
