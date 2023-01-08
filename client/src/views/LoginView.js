import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useDispatch } from 'react-redux'
import { login } from "../store/middlewares/thunk";
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";
import { handleSetThisUser } from "../store/middlewares/thunk";

export default function LoginView() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const inputEmailRef = useRef()
  const inputPasswordRef = useRef()


  const handleLogin = async (e) => {
    e.preventDefault()

    const inputs = {
      email: inputEmailRef.current.value, 
      password: inputPasswordRef.current.value
    }

    dispatch(login(inputs))
    .then((response) => {

      console.log(response.data.user)

      dispatch(handleSetThisUser(response.data.user))
      localStorage.setItem('access_token', response.data.access_token)

      navigate('/home/chats')

      inputEmailRef.current.value = '' 
      inputPasswordRef.current.value = ''
    })
    .catch((err) => {
      if(err.response?.data?.message) {
        swal({
          text: `${err.response.data.message}`,
          icon: "error",
        });

        if(err.response.data.message !== 'Email is required' && err.response.data.message !== 'Password is required') {
          inputEmailRef.current.value = '' 
          inputPasswordRef.current.value = ''
        }
         
      } else {
        console.log(err)
      }
    }) 
  }


  return (
    <div className="bg-darker-gray min-h-screen flex text-white justify-center items-center fixed w-full overflow-auto">
      <div className="flex flex-col gap-8 flex-1">
        <div>
          <h1 className="text-center text-3xl font-bold mb-2">Login</h1>
          <h3 className="text-center">Login to your account</h3>
        </div>
        <div className="bg-light-gray flex-1 p-4 w-sm mx-auto">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-8 p-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="mb-2 text-sm">Email</label>
                <div className="flex flex-1 gap-4 items-center bg-darker-gray">
                  <FontAwesomeIcon
                    className="text-slate-500 text-xl bg-main-color-blur p-3"
                    icon="user-large"
                  />
                  <input
                    ref={inputEmailRef}
                    type="text"
                    className="text-white text-sm focus:border-none focus:outline-none bg-transparent flex-1"
                    placeholder="Email"></input>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-sm">Password</label>
                <div className="flex flex-1 gap-4 items-center bg-darker-gray">
                  <FontAwesomeIcon
                    className="text-slate-500 text-xl bg-main-color-blur p-3"
                    icon="lock"
                  />
                  <input
                    ref={inputPasswordRef}
                    type="password"
                    className="text-white text-sm focus:border-none focus:outline-none bg-transparent flex-1"
                    placeholder="*****"></input>
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
