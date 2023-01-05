export default function InputField(label, icon, type, placeholder, value) {
  <div className="flex flex-col">
    <label className="mb-2 text-sm">{label}</label>
    <div className="flex flex-1 gap-4 items-center bg-darker-gray">
      <FontAwesomeIcon
        className="text-slate-500 text-xl bg-main-color-blur p-3"
        icon={icon}
      />
      <input
        type={type}
        className="text-white text-sm focus:border-none focus:outline-none bg-transparent flex-1"
        placeholder={placeholder}
        value={value}
      ></input>
    </div>
  </div>;
}
