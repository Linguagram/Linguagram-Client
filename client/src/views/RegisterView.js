import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import InputField from "../components/Form/InputFiled";
import MyListbox from "../components/Form/ListBox";
import { register, changeNavbarColor } from "../store/middlewares/thunk";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import ComboboxInterest from "../components/Form/Combobox";
import { swalError, swalErrorStr } from "../util/swal";

export default function RegisterView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedInterest, setSelectedInterest] = useState([]);

  const {thisUser} = useSelector((state) => state.userReducer)
  console.log(thisUser)

  const inputUsernameRef = useRef();
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const inputConfirmPasswordRef = useRef();
  const inputCountryRef = useRef();
  const inputPhoneNumberRef = useRef();
  const inputNativeLanguageRef = useRef();
  const inputInterestLanguageRef = useRef();
  const inputInterestsRef = useRef();

  const deleteInterest = (interestId) => {
    if(selectedInterest.length > 1) {
        const updatedSelectedInterest = selectedInterest.filter(el => el.id !== interestId)
        setSelectedInterest(updatedSelectedInterest)
    } else {
        swalErrorStr('You need to have at least one interest...')
    }
}

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const inputs = {
      username: inputUsernameRef.current.value,
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
      confirmPassword: inputConfirmPasswordRef.current.value,
      country: inputCountryRef.current.name,
      phoneNumber: inputPhoneNumberRef.current.value,
      status: "Available",
      nativeLanguages: [inputNativeLanguageRef.current.id],
      interestLanguages: [inputInterestLanguageRef.current.id],
      interests: []
    };

    inputs.interests = selectedInterest.map(el => el.id)

    dispatch(register(inputs))
      .then((response) => {
        swal(
          "",
          `Please check your inbox. We have sent a verification link to ${response.data.user.email}. `
        );

        inputUsernameRef.current.value = "";
        inputEmailRef.current.value = "";
        inputPasswordRef.current.value = "";
        inputConfirmPasswordRef.current.value = "";
        inputPhoneNumberRef.current.value = "";
        inputCountryRef.current.value = ""

        navigate("/login");
      })
      .catch((err) => {
        if (err.response?.data?.message) {
          swalError(err)
          inputPasswordRef.current.value = "";
          inputConfirmPasswordRef.current.value = "";
        }
    });
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
    <div className="fixed flex justify-center w-screen h-screen overflow-auto text-white bg-light-gray" onScroll={handleScrollEvent}>
      <div className="flex flex-col flex-1 gap-4 md:gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="mt-20 text-3xl font-bold text-center md:mt-12 lg:mt-20">
            Register
          </h1>
          <h3 className="text-center">Create new account</h3>
        </div>
        <div className="w-full px-4 pb-8 mx-auto bg-light-gray h-content md:max-w-full lg:max-w-2xl xl:max-w-3xl lg:py-4 lg:p-2">
          <form onSubmit={handleRegisterSubmit}>
            <div className="flex flex-col items-center gap-4 p-4 md:py-0 md:w-full">
              <div className="flex flex-col justify-between w-full gap-4 md:flex-row">
                <div className="flex flex-col w-full gap-4">
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
                <div className="flex flex-col w-full gap-4">
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
                    <label className="mb-2 text-xs md:text-sm">Native in</label>
                    <div className="flex items-center flex-1 bg-darker-gray">
                      <FontAwesomeIcon
                        className="p-2 text-base text-slate-500 md:text-xl bg-main-color-blur md:p-3"
                        icon="language"
                      />
                      <div className="w-full">
                        <MyListbox inputRef={inputNativeLanguageRef} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-xs md:text-sm">Want to learn</label>
                    <div className="flex items-center flex-1 bg-darker-gray">
                      <FontAwesomeIcon
                        className="p-2 text-base text-slate-500 md:text-xl bg-main-color-blur md:p-3"
                        icon="language"
                      />
                      <div className="w-full">
                        <MyListbox inputRef={inputInterestLanguageRef} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-2 text-xs md:text-sm">Interest Topic</label>
                <div className="flex items-center flex-1 bg-darker-gray">
                  <FontAwesomeIcon
                    className="p-2 text-base text-slate-500 md:text-xl bg-main-color-blur md:p-3"
                    icon="person-biking"
                  />
                  <div className="w-full">
                    <ComboboxInterest
                      selectedInterest={selectedInterest}
                      setSelectedInterest={setSelectedInterest}
                    />
                  </div>
                </div>
              </div>
              <div className="font-medium">Selected topic</div>
              <div className="flex gap-4">
                {selectedInterest.map((interest) => (
                  <div
                    className="flex items-center gap-1 px-3 py-1 rounded bg-darker-gray"
                    key={interest.id}>
                      <div>
                        {interest.name}
                      </div>
                      <div onClick={() => deleteInterest(interest.id)} className="cursor-pointer">
                        &times;
                      </div>
                  </div>
                ))}
              </div>
              <button
                type="submit"
                className="w-full p-3 text-sm rounded bg-main-color"
                >
                  Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
