import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import InputField from "../components/Form/InputFiled";
import MyListbox from "../components/Form/ListBox";
import { register } from "../store/middlewares/thunk";
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";

export default function RegisterView() {

  const dispatch = useDispatch()
	const navigate = useNavigate()

  const inputUsernameRef = useRef()
  const inputEmailRef = useRef()
  const inputPasswordRef = useRef()
  const inputConfirmPasswordRef = useRef()
  const inputPhoneNumberRef = useRef()
  const inputCountryRef = useRef()

  const handleRegisterSubmit = async(e) => {
    e.preventDefault()

    const inputs = {
      username: inputUsernameRef.current.value,
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
      confirmPassword: inputConfirmPasswordRef.current.value,
      phoneNumber: inputPhoneNumberRef.current.value,
      country: inputCountryRef.current.name
    }

    dispatch(register(inputs))
    .then((response) => {
      swal("", `Please check your inbox. We have sent a verification link to ${response.data.user.email}. `);

      inputUsernameRef.current.value = ''
      inputEmailRef.current.value = ''
      inputPasswordRef.current.value = ''
      inputConfirmPasswordRef.current.value = ''
      inputPhoneNumberRef.current.value = ''

			navigate('/login')
    })
    .catch((err) => {
      if(err.response?.data?.message) {
        swal({
            text: `${err.response.data.message}`,
            icon: "error",
        });
        inputPasswordRef.current.value = ''
      	inputConfirmPasswordRef.current.value = ''
      }
    })  
  }


  return (
    <div className="bg-light-gray h-screen w-screen fixed overflow-auto flex text-white justify-center">
      <div className="flex flex-col gap-8 flex-1">
        <div>
          <h1 className="text-center text-3xl font-bold mb-2 mt-20">
            Register
          </h1>
          <h3 className="text-center">Create new account</h3>
        </div>
        <div className="bg-light-gray h-content px-4 w-full mx-auto pb-16 md:max-w-sm">
          <form onSubmit={handleRegisterSubmit}>
            <div className="flex flex-col gap-8 p-4">
              <div className="flex flex-col gap-4">
                <InputField
                  inputRef={inputUsernameRef}
                  label={"Username"}
                  icon={"user-large"}
                  type={"text"}
                  placeholder={"Username"}
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
                <InputField
                  inputRef={inputPhoneNumberRef}
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
                      icon="globe"
                    />
                    <div className="w-full">
                      <MyListbox inputRef={inputCountryRef}/>
                    </div>
                  </div>
                </div>
              </div>
              <button type='submit' className="bg-main-color rounded p-3 text-sm">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
