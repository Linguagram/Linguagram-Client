import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setFriendRequests } from "../../store/actions/actionCreator";
import { deleteFriendship } from "../../store/middlewares/thunk";
import { swalError } from "../../util/swal";

export default function FriendCard({friend}) {
  const { friendRequests } = useSelector((state) => state.friendReducer)
  const dispatch = useDispatch()

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

  return (
    <div className="flex items-center justify-start">
      <h5 className="text-white cursor-pointer">{friend.username}</h5>
      {/* <FontAwesomeIcon
        onClick={deleteFriend}
        className="text-gray-400 cursor-pointer"
        icon="trash-can"
      /> */}
    </div>
  );
}
