export default function PeopleCard() {
  return (
    <div className="flex flex-col items-center justify-between w-1/4 px-4 text-white rounded-lg bg-light-gray h-96">
      <div className="flex justify-center w-full mt-5">
        <img
          alt="Paul Clapton"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          class="h-full w-1/3 rounded-lg object-cover shadow-sm"
        />
      </div>
      <div className="flex flex-col items-center justify-between w-full">
        <div className="text-lg">budigunawan</div>
        <div className="text-sm text-gray-300">Indonesia</div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-gray-400">Native</div>
        <div>Indonesia</div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-gray-400">Learning</div>
        <div className="w-1/2 text-right">Korean, English</div>
      </div>
      <div className="text-lg font-semibold">Interests</div>
      <div className="flex flex-wrap items-center justify-center w-full gap-2 text-center">
        <span class="px-3 py-1 text-sm rounded-full text-gray-200  bg-black-blue ">
        Technology
        </span>
        <span class="px-3 py-1 text-sm rounded-full text-gray-200  bg-black-blue ">
        Sports
        </span>
        <span class="px-3 py-1 text-sm rounded-full text-gray-200  bg-black-blue ">
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
  );
}