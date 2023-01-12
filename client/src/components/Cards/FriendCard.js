import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAllGroups, addPrivateGroups, setFriendRequests } from "../../store/actions/actionCreator";
import { deleteFriendship, newChatFromExplore, openChat } from "../../store/middlewares/thunk";
import { swalError } from "../../util/swal";

export default function FriendCard({friend}) {
  const { friendRequests } = useSelector((state) => state.friendReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const deleteFriend = () => {
    dispatch(deleteFriendship(friend.id))
    .then((res) => {
      console.log('berhasil delete');
      const friendReqFilter = []
      friendRequests.forEach((el) => {
        if (el.User.id !== friend.id) {
          friendReqFilter.push(el)
        }
      })
      dispatch(setFriendRequests(friendReqFilter))
    })
    .catch((err) => {
      swalError(err)
    })
  }

  const handleOpenChat = (userId) => {
    dispatch(newChatFromExplore(userId))
    .then((data) => {
        data.Messages = [];
        dispatch(addAllGroups(data));
        dispatch(addPrivateGroups(data));
        dispatch(openChat(data, dispatch));
        navigate("/home/chats");
    })
    .catch((err) => {
      swalError(err)
    })
  }

  return (
    <div className="flex items-center justify-start friend-card-hover p-2 pl-2">
      <h5 className="text-white cursor-pointer" onClick={() => handleOpenChat(friend.id)}>{friend.username}</h5>
      {/* <FontAwesomeIcon
        onClick={deleteFriend}
        className="text-gray-400 cursor-pointer"
        icon="trash-can"
      /> */}
    </div>
  );
}
