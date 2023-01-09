import avatar from "../../pictures/avatar-1.3921191a8acf79d3e907.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { acceptFriendRequest } from "../../store/middlewares/thunk";
import { useEffect, useState } from "react";

export default function FriendRequestCard({ friend }) {
  const dispatch = useDispatch();
  const [request, setRequest] = useState({});

  useEffect(() => {
    if (localStorage.user_id == friend.UserId) setRequest(friend.Friend);
    else setRequest(friend.User)
  }, []);

  const acceptRequestHandler = () => {
    console.log({ friend });
    dispatch(acceptFriendRequest(request.id));
  };

  return (
    <div>
      {request ? (
        <div className="flex items-center gap-4 p-2 rounded">
          <img
            src={request.Avatar.url}
            className="avatar-chat"
            alt="avatar"></img>
          <div className="flex justify-between w-full gap-1">
            <div className="flex items-center justify-between">
              <h4 className="text-base text-white cursor-pointer hover:underline">
                {request.username}
              </h4>
            </div>
            <div className="flex items-center justify-between gap-6">
              <h6 className="text-2xl text-gray-300 cursor-pointer ">
                &times;
              </h6>
              <button onClick={acceptRequestHandler}>
                <FontAwesomeIcon
                  className="text-base text-gray-300 cursor-pointer"
                  icon="check"
                />
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
