import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { acceptFriendRequest, deleteFriendship } from "../../store/middlewares/thunk";
import { useEffect, useState } from "react";
import { swalError, swalSuccess } from "../../util/swal";
import { setFriendRequests } from "../../store/actions/actionCreator";

export default function FriendRequestCard({ friend }) {
  const { friendRequests } = useSelector((state) => state.friendReducer)
  const dispatch = useDispatch();
  const [request, setRequest] = useState({});

  useEffect(() => {
    if (localStorage.user_id == friend.UserId) setRequest(friend.Friend);
    else setRequest(friend.User)
  }, []);

  const acceptRequestHandler = () => {
    dispatch(acceptFriendRequest(friend.UserId));
  };

  const deleteFriendReq = () => {
    dispatch(deleteFriendship(request.id))
    .then((res) => {
      console.log('berhasil delete');
      const friendReqFilter = []
      friendRequests.forEach((el) => {
        if (el.User.id !== request.id) {
          friendReqFilter.push(el)
        }
      })
      dispatch(setFriendRequests(friendReqFilter))
      onclose()
    })
    .catch((err) => {
      swalError(err)
    })
  }

  console.log('friendRequests', friendRequests);
  console.log('request', request);

  return (
    <div>
      {friend ? (
        <div className="flex items-center gap-4 p-2 rounded">
          {request.Avatar ? 
            <img
            src={request.Avatar.url}
            className="avatar-chat"
            alt="avatar"></img> : ""
          }
          <div className="flex justify-between w-full gap-1">
            <div className="flex items-center justify-between">
              <h4 className="text-base text-white cursor-pointer hover:underline">
                {request.username}
              </h4>
            </div>
            <div className="flex items-center justify-between gap-6">
              <button onClick={deleteFriendReq} type="button" className="text-2xl text-gray-300 cursor-pointer ">
                &times;
              </button>
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
