import { ChangeEvent, ReactNode } from "react";

interface InputData {
  placeholder: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => any;
  icon: ReactNode;
  value: string;
}

const OTP = (props: InputData) => {
  return (
    <div className="border rounded-lg input-borders h-11  flex items-center gap-2 py-6 px-4">
      {props.icon}
      <input
        className=" outline-none w-full ml-4 "
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      ></input>
    </div>
  );
};

export default OTP;
