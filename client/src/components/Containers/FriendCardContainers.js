import FriendCard from "../Cards/FriendCard";

export default function FriendCardContainers({ letter, friends }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <div className="text-light-blue">{letter}</div>
        <div className="flex flex-col gap-5 pt-2 pl-2">
          {friends.map((friend) => {
            return <FriendCard key={friend.id} friend={friend} />;
          })}
        </div>
      </div>
    </div>
  );
}
