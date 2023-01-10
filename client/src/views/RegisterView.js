import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import InputField from "../components/Form/InputFiled";
import MyListbox from "../components/Form/ListBox";
import { register, changeNavbarColor } from "../store/middlewares/thunk";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import ComboboxInterest from "../components/Form/Combobox";

export default function RegisterView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedInterest, setSelectedInterest] = useState([]);

  const inputUsernameRef = useRef();
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const inputConfirmPasswordRef = useRef();
  const inputCountryRef = useRef();
  const inputPhoneNumberRef = useRef();
  const inputNativeLanguageRef = useRef();
  const inputInterestLanguageRef = useRef();
  const inputInterestsRef = useRef();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const inputs = {
      username: inputUsernameRef.current.value,
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
      confirmPassword: inputConfirmPasswordRef.current.value,
      country: inputCountryRef.current.name,
      phoneNumber: inputPhoneNumberRef.current.value,
      nativeLanguage: [],
      interestLanguage: [],
      interests: [],
    };

    console.log(inputInterestLanguageRef.current);

    inputs.interests = selectedInterest.map((el) => el.id);

    console.log(inputs);

    // dispatch(register(inputs))
    //   .then((response) => {
    //     swal(
    //       "",
    //       `Please check your inbox. We have sent a verification link to ${response.data.user.email}. `
    //     );

    //     inputUsernameRef.current.value = "";
    //     inputEmailRef.current.value = "";
    //     inputPasswordRef.current.value = "";
    //     inputConfirmPasswordRef.current.value = "";
    //     inputPhoneNumberRef.current.value = "";

    //     navigate("/login");
    //   })
    //   .catch((err) => {
    //     if (err.response?.data?.message) {
    //       swal({
    //         text: `${err.response.data.message}`,
    //         icon: "error",
    //       });
    //       inputPasswordRef.current.value = "";
    //       inputConfirmPasswordRef.current.value = "";
    //     }
    //   });
  };

  const handleScrollEvent = (e) => {
    e.preventDefault();
    if (e.target.scrollTop >= 90) {
      dispatch(changeNavbarColor(true));
    } else {
      dispatch(changeNavbarColor(false));
    }
  };

  useEffect(() => {
    dispatch(changeNavbarColor(false));
  }, []);

  return (
    <div className="bg-light-gray h-screen w-screen fixed overflow-auto flex text-white justify-center" onScroll={handleScrollEvent}>
      <div className="flex flex-col gap-4 md:gap-4 flex-1">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-3xl font-bold mt-20 md:mt-12 lg:mt-20">
            Register
          </h1>
          <h3 className="text-center">Create new account</h3>
        </div>
        <div className="bg-light-gray h-content px-4 w-full mx-auto pb-8 md:max-w-full lg:max-w-2xl xl:max-w-3xl lg:py-4 lg:p-2">
          <form onSubmit={handleRegisterSubmit}>
            <div className="flex flex-col gap-4 p-4 md:py-0 md:w-full items-center">
              <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                <div className="flex flex-col gap-4 w-full">
                  <InputField
                    inputRef={inputUsernameRef}
                    label={"Name"}
                    icon={"user-large"}
                    type={"text"}
                    placeholder={"Name"}
                  />
                  <InputField
                    inputRef={inputEmailRef}
                    label={"Email"}
                    icon={"envelope"}
                    type={"text"}
                    placeholder={"Email"}
                  />
                  <InputField
                    inputRef={inputPasswordRef}
                    label={"Password"}
                    icon={"lock"}
                    type={"password"}
                    placeholder={"*****"}
                  />
                  <InputField
                    inputRef={inputConfirmPasswordRef}
                    label={"Confirm Password"}
                    icon={"lock"}
                    type={"password"}
                    placeholder={"*****"}
                  />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <InputField
                    inputRef={inputCountryRef}
                    label={"Country"}
                    icon={"globe"}
                    type={"text"}
                    placeholder={"Country"}
                  />
                  <InputField
                    inputRef={inputPhoneNumberRef}
                    label={"Phone Number"}
                    icon={"phone"}
                    type={"text"}
                    placeholder={"Phone Number"}
                  />
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm">Native in</label>
                    <div className="flex flex-1 items-center bg-darker-gray">
                      <FontAwesomeIcon
                        className="text-slate-500 text-xl bg-main-color-blur p-3"
                        icon="globe"
                      />
                      <div className="w-full">
                        <MyListbox inputRef={inputNativeLanguageRef} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm">Want to learn</label>
                    <div className="flex flex-1 items-center bg-darker-gray">
                      <FontAwesomeIcon
                        className="text-slate-500 text-xl bg-main-color-blur p-3"
                        icon="globe"
                      />
                      <div className="w-full">
                        <MyListbox inputRef={inputInterestLanguageRef} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-2 text-sm">Interest Topic</label>
                <div className="flex flex-1 items-center bg-darker-gray">
                  <FontAwesomeIcon
                    className="text-slate-500 text-xl bg-main-color-blur p-3"
                    icon="globe"
                  />
                  <div className="w-full">
                    <ComboboxInterest
                      selectedInterest={selectedInterest}
                      setSelectedInterest={setSelectedInterest}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                {selectedInterest.map((interest) => (
                  <div
                    className="bg-darker-gray py-1 px-3 rounded"
                    key={interest.id}>
                    {interest.name}
                  </div>
                ))}
              </div>
              <button
                type="submit"
                className="bg-main-color rounded p-3 text-sm w-full">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
