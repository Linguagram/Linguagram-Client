import avatar from "../../pictures/avatar-1.3921191a8acf79d3e907.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { acceptFriendRequest } from "../../store/middlewares/thunk";

export default function FriendRequestCard({ friend }) {
  const dispatch = useDispatch();

  const acceptRequestHandler = () => {
    console.log({friend})
    dispatch(acceptFriendRequest(friend.UserId))
  };

  return (
    <div>
      <div className="flex items-center gap-4 p-2 rounded">
        <img
          src={friend.User.Avatar.url}
          className="avatar-chat"
          alt="avatar"></img>
        <div className="flex justify-between w-full gap-1">
          <div className="flex items-center justify-between">
            <h4 className="text-base text-white cursor-pointer hover:underline">
              {friend.User.username}
            </h4>
          </div>
          <div className="flex items-center justify-between gap-6">
            <h6 className="text-2xl text-gray-300 cursor-pointer ">&times;</h6>
            <button onClick={acceptRequestHandler}>
              <FontAwesomeIcon
                className="text-base text-gray-300 cursor-pointer"
                icon="check"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
