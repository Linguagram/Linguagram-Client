export default function PeopleCard() {
  return (
    <div className="flex flex-col items-center justify-between w-full px-4 text-white rounded-lg bg-light-gray h-96">
      <div className="flex justify-center w-full mt-5">
        <img
          alt="Paul Clapton"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          class="h-full w-1/3 rounded-lg object-cover shadow-sm"
        />
      </div>
      <div className="flex justify-between w-full">
        <div>name</div>
        <div>country</div>
      </div>
      <div className="flex justify-between w-full">
        <div>Native in</div>
        <div>Indonesian</div>
      </div>
      <div className="flex justify-between w-full">
        <div>Learning</div>
        <div>Korean, English</div>
      </div>
      <div className="grid items-center justify-center w-full grid-cols-3 text-center">
        <div>interest</div>
        <div>interest</div>
        <div>interest</div>
        <div>interest</div>
      </div>
      <div className="flex w-full gap-2 mb-5">
        <button>send friend req</button>
        <button>chat</button>
      </div>
    </div>
  );
}
