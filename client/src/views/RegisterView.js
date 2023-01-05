import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputField from "../components/Form/InputFiled";
import MyListbox from "../components/Form/ListBox";

export default function RegisterView() {
  return (
    <div className="bg-light-gray h-screen flex text-white justify-center">
      <div className="flex flex-col gap-8 flex-1">
        <div>
          <h1 className="text-center text-3xl font-bold mb-2 mt-20">
            Register
          </h1>
          <h3 className="text-center">Create new account</h3>
        </div>
        <div className="bg-light-gray h-content px-4 w-full mx-auto pb-16 md:max-w-sm">
          <form>
            <div className="flex flex-col gap-8 p-4">
              <div className="flex flex-col gap-4">
                <InputField
                  label={"Username"}
                  icon={"user-large"}
                  type={"text"}
                  placeholder={"Username"}
                />
                <InputField
                  label={"Email"}
                  icon={"envelope"}
                  type={"text"}
                  placeholder={"Email"}
                />
                <InputField
                  label={"Password"}
                  icon={"lock"}
                  type={"password"}
                  placeholder={"*****"}
                />
                <InputField
                  label={"Phone Number"}
                  icon={"phone"}
                  type={"text"}
                  placeholder={"Phone Number"}
                />
                <div className="flex flex-col">
                  <label className="mb-2 text-sm">Country</label>
                  <div className="flex flex-1 items-center bg-darker-gray">
                    <FontAwesomeIcon
                      className="text-slate-500 text-xl bg-main-color-blur p-3"
                      icon="phone"
                    />
                    <div className="w-full">
                      <MyListbox />
                    </div>
                  </div>
                </div>
              </div>
              <button className="bg-main-color rounded p-3 text-sm">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
