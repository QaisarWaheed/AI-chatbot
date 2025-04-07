import { ReactNode, useState } from "react";
import { Invisible, visibleIcon } from "../Icons/svgs";

interface PasswordProps {
  placeholder: string;
  type: string;
  onChange: (event: any) => any;
  icon: ReactNode;
  value: string;
  visibiltyIcon: ReactNode;
}

const PasswordField = (props: PasswordProps) => {
  const [togglePassword, setTogglePassword] = useState(false);
  function handleToggle() {
    setTogglePassword((state) => !state);
  }
  return (
    <div className="border rounded-lg input-borders h-11  flex items-center gap-2 py-6 px-4 relative">
      {props.icon}
      <input
        className=" outline-none w-full ml-4 "
        type={togglePassword ? "text" : "password"}
        placeholder={props.placeholder}
        onChange={props.onChange}
        // value={props.value}
      ></input>
      <div onClick={handleToggle}>
        {" "}
        {togglePassword ? Invisible : visibleIcon}
      </div>
    </div>
  );
};

export default PasswordField;
