interface RadioInputProps {
  label: string;
  name: string;
  onChange: (event: any) => any;
  value: string;
}

const RadioInput = (props: RadioInputProps) => {
  return (
    <div className="space-x-8  ">
      <label className="flex items-center gap-2 ">
        <input
          type="radio"
          name={props.name}
          className="peer hidden"
          onChange={props.onChange}
          value={props.value}
        />
        <div className="w-5 h-5 border bg-custom-gray border-custom-gray2 rounded-full peer-checked:bg-blue-500 peer-checked:ring-0 peer-checked:ring-white"></div>
        <div className="text-custom-text0 mr-16">{props.label}</div>
      </label>
    </div>
  );
};

export default RadioInput;
