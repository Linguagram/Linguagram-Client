import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function FriendCard({friend}) {
  return (
    <div className="flex justify-between">
      <h5 className="text-white cursor-pointer">{friend.Friend.username}</h5>
      <FontAwesomeIcon
        className="text-gray-400 cursor-pointer"
        icon="trash-can"
      />
    </div>
  );
}
