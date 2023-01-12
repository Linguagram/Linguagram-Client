import FriendCard from "../Cards/FriendCard";
import "./FriendCard.css";

export default function FriendCardContainers({ letter, friends }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <div className="text-light-blue mb-2">{letter}</div>
        <div className="flex flex-col">
          {friends.map((friend) => {
            return <FriendCard key={friend.id} friend={friend} />;
          })}
        </div>
      </div>
    </div>
  );
}
