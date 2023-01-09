import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function FriendCard({friend}) {
  return (
    <div className="flex justify-between items-center">
      <h5 className="text-white cursor-pointer">{friend.username}</h5>
      <FontAwesomeIcon
        className="text-gray-400 cursor-pointer"
        icon="trash-can"
      />
    </div>
  );
}
