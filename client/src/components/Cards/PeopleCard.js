export default function PeopleCard() {
  return (
    <div className="w-full p-4 h-96 2xl:h-full">
      <div className="flex flex-col items-center justify-between w-full h-full px-4 text-white rounded-lg bg-light-gray">
        <div className="flex justify-center w-full mt-5">
          <img
            alt="Paul Clapton"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            class="h-full w-1/3 2xl:w-1/4 rounded-lg object-cover shadow-sm"
          />
        </div>
        <div className="flex flex-col items-center justify-between w-full">
          <div className="text-lg 2xl:text-xl">budigunawan</div>
          <div className="text-sm text-gray-300 2xl:text-lg">Indonesia</div>
        </div>
        <div className="flex justify-between w-full text-sm 2xl:text-base">
          <div className="text-gray-400">Native</div>
          <div>Indonesia</div>
        </div>
        <div className="flex justify-between w-full text-sm 2xl:text-base">
          <div className="text-gray-400">Learning</div>
          <div className="w-1/2 text-right">Korean, English</div>
        </div>
        <div className="text-base font-semibold 2xl:text-lg">Interests</div>
        <div className="flex flex-wrap items-center justify-center w-full gap-2 mb-3 text-sm text-center lg:text-xs 2xl:text-base">
          <span class="px-3 py-1 rounded-full text-gray-200  bg-black-blue ">
            Technology
          </span>
          <span class="px-3 py-1 rounded-full text-gray-200  bg-black-blue ">
            Sports
          </span>
          <span class="px-3 py-1 rounded-full text-gray-200  bg-black-blue ">
            Cooking
          </span>
        </div>
        <div className="flex justify-center w-full gap-2 mb-5 text-sm">
          <a
            className="inline-block p-2 text-center text-white border rounded-lg bg-main-color border-main-color hover:bg-black-blue hover:border-black-blue focus:outline-none focus:ring active:text-main-color"
            href="/download"
          >
            <span className="sr-only"> Add Friend </span>
            Add Friend
          </a>
          <a
            className="inline-block p-2 text-center text-white border rounded-lg bg-main-color border-main-color hover:bg-black-blue hover:border-black-blue focus:outline-none focus:ring active:text-main-color"
            href="/download"
          >
            <span className="sr-only"> Chat </span>
            Chat
          </a>
        </div>
      </div>
    </div>
  );
}
