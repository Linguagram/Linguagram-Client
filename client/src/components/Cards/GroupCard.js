import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCounterpartUser } from "../../store/actions/actionCreator";
import { joinGroup } from "../../store/middlewares/thunk";
import { getGroupAvatar } from "../../util/getAvatar";
import { swalError } from "../../util/swal";
import { openChat } from "../../store/middlewares/thunk";

export default function GroupCard({ groupId, groupName, members, group }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formatMembers = (members) => {
    if (members.length === 0) {
      return "-";
    } else if (members.length === 1) {
      return `${members[0].User.username}`;
    } else if (members.length === 2) {
      return `${members[0].User.username} and ${members[1].User.username}`;
    } else if (members.length === 3) {
      return `${members[0].User.username}, ${members[1].User.username}, and ${members[2].User.username}`;
    } else if (members.length > 3) {
      return `${members[0].User.username}, ${members[1].User.username}, and ${
        members.length - 2
      } others`;
    }
  };

  const handleJoinGroup = () => {
    console.log("[handleJoinGroup]", group);
    console.log("[groupId]", groupId);
    dispatch(joinGroup(groupId))
      .then((data) => {
        dispatch(setCounterpartUser(group))
        console.log(data, "<<<<<<< data joinGroup");
        dispatch(openChat(data.Group, dispatch));
        navigate("/home/groups");
      })
  };

  return (
    <div className="flex flex-col justify-around w-full p-6 text-white rounded-lg md:items-center md:justify-between md:h-30 min-h-36 md:py-4 md:flex-row lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl bg-light-gray">
    <div className="flex items-center flex-1 gap-8 mb-4 md:mb-0">
      <img
        src={getGroupAvatar(group)}
      />
      <div>
        <div className="text-2xl font-bold">{groupName}</div>
        <div className="text-base">{group.description}</div>
        <div className="text-xs text-gray-400">Members: {formatMembers(members)}</div>
      </div>
    </div>
      <button
        className="inline-block w-full p-2 text-center text-white border rounded-lg md:w-fit bg-main-color border-main-color hover:bg-black-blue hover:border-black-blue focus:outline-none focus:ring active:text-main-color"
        onClick={handleJoinGroup}>
        Join Group
      </button>
    </div>
  );
}
