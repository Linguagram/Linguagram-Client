import { useDispatch } from "react-redux";
import { changeNavbarColor } from "../store/middlewares/thunk";
import { Link } from "react-router-dom";

export default function LandingView() {
  const dispatch = useDispatch();

  const handleScrollEvent = (e) => {
    e.preventDefault();
    if (e.target.scrollTop >= 90) {
      dispatch(changeNavbarColor(true));
    } else {
      dispatch(changeNavbarColor(false));
    }
  };

  return (
    <div
      className="w-full h-full fixed overflow-auto"
      id="main-content"
      onScroll={handleScrollEvent}>
      <div className="flex flex-col flex-1 min-h-screen bg-darker-gray text-white">
        {/* Hero */}
        <header
          className="flex flex-col h-screen bg-cover bg-center justify-center md:justify-center items-center lg:h-screen md:bg-bottom"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1473679408190-0693dd22fe6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
          }}>
          <div className="bg-black h-screen flex flex-col w-full text-center items-center justify-center bg-opacity-40">
            <p className="pt-2 text-xl  w-full lg:text-3xl md:p-0">
              Learn any language from native.
            </p>
            <h1 className="text-3xl font-bold w-full mx-8 px-2 pb-2 mb-2 md:text-7xl md:mb-8 md:p-0">
              Speak your mind <br /> in any tounge.
            </h1>
            <div className="flex flex-col items-center lg:mb-36">
              <Link to={'/login'} className="bg-main-color rounded py-2 px-8 ">
                Get Started
              </Link>
            </div>
          </div>
        </header>
        <main className="container mx-auto min-h-screen lg:min-h-max py-4">
          <div className="py-8 mb-4">
            <h1 className="text-3xl font-bold  text-center mb-4">
              What is Linguagram?
            </h1>
            <h3 className="text-center text-xl  px-8 lg:px-0">
              A language learning site where people teach each other
            </h3>
          </div>

          <div className="flex flex-col md:flex-none md:grid md:grid-cols-2 h-screen gap-4 md:gap-8 px-4 mb-4">
            <div
              className="md:flex-none bg-center bg-cover rounded-xl flex justify-start items-end flex-1"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/flagged/photo-1557898246-9fd78587bcc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
              }}>
              <p className=" text-2xl font-light p-4 lg:p-8 lg:text-3xl">
                <span className="font-bold">Sylvie</span> is a native French
                speaker. She wants to work on her English.
              </p>
            </div>
            <div
              className="lg:flex-none bg-center bg-cover rounded-xl flex justify-start items-end flex-1"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1513712834987-81c201758592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0JTIwd2FybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60)",
              }}>
              <p className="text-2xl font-light p-4 lg:p-8 lg:text-3xl">
                <span className="font-bold">Jane</span> is a native English
                speaker. She wants to improve her French skills.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center px-8 justify-center flex-1 lg:max-w-screen-sm lg:mx-auto my-16">
            <h1 className="text-center font-bold text-4xl py-2 mb-4">
            Sylvie and Jane meet on Linguagram...
            </h1>
            <h3 className="text-lg lg:text-2xl font-light text-center mb-4">
              ...and use Linguagram to practice their target language together!
              Stefania helps Anne with German and Anne helps Stefania with
              English
            </h3>
            <h3 className="text-lg lg:text-2xl font-light text-center mb-8">
              Join Stefania and Anne and start improve your language!
            </h3>
            <Link to="/login" className="bg-main-color rounded py-2 px-8">
              Get Started
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
