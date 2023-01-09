import avatar from "../../pictures/avatar-1.3921191a8acf79d3e907.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FriendRequestCard({friend}) {
  return (
    <div>
      <div className="flex items-center gap-4 p-2 rounded">
        <img src={friend.User.Avatar.url} className="avatar-chat" alt="avatar"></img>
        <div className="flex justify-between w-full gap-1">
          <div className="flex items-center justify-between">
            <h4 className="text-base text-white cursor-pointer hover:underline">
              {friend.User.username}
            </h4>
          </div>
          <div className="flex items-center justify-between gap-6">
            <h6 className="text-2xl text-gray-300 cursor-pointer ">&times;</h6>
            <FontAwesomeIcon
              className="text-base text-gray-300 cursor-pointer"
              icon="check"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
