import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InputField({
  label,
  icon,
  type,
  placeholder,
  value,
  inputRef,
  defaultValue,
}) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-xs md:text-sm">{label}</label>
      <div className="flex items-center flex-1 gap-2 md:gap-4 bg-darker-gray">
        <FontAwesomeIcon
          className="p-2 text-base text-slate-500 md:text-xl bg-main-color-blur md:p-3"
          icon={icon}
        />
        <div className="w-full">
          <input
            ref={inputRef}
            type={type}
            className="flex-1 w-full text-xs text-white bg-transparent md:text-sm focus:border-none focus:outline-none"
            placeholder={placeholder}
            defaultValue={defaultValue}
            value={value}
          ></input>
        </div>
      </div>
    </div>
  );
}
