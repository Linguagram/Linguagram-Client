import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginView() {
  return (
    <div className="bg-darker-gray min-h-screen flex text-white justify-center items-center fixed w-full overflow-auto">
      <div className="flex flex-col gap-8 flex-1">
        <div>
          <h1 className="text-center text-3xl font-bold mb-2">Login</h1>
          <h3 className="text-center">Login to your account</h3>
        </div>
        <div className="bg-light-gray flex-1 p-4 w-sm mx-auto">
          <form>
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
                    type="password"
                    className="text-white text-sm focus:border-none focus:outline-none bg-transparent flex-1"
                    placeholder="*****"></input>
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
