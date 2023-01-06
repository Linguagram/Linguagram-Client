export default function GroupCard() {
  return (
    <div className="flex items-center justify-between w-1/2 h-20 px-4 text-white rounded-lg bg-light-gray">
      <div>
        <div className="text-xl">Group Name</div>
        <div className="text-sm text-gray-400">Ali, Budi, and 2 others join this group</div>
      </div>
      <a
          className="inline-block p-2 text-center text-white border rounded-lg bg-main-color border-main-color hover:bg-black-blue hover:border-black-blue focus:outline-none focus:ring active:text-main-color"
          href="/download"
        >
          <span className="sr-only"> Add Friend </span>
          Join Group
        </a>
    </div>
  );
}
