import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { joinGroup } from "../../store/middlewares/thunk";
import { getGroupAvatar } from "../../util/getAvatar";
import { swalError } from "../../util/swal";

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
    dispatch(joinGroup(groupId))
      .then((_) => {
        navigate("/home/groups");
      })
      .catch((err) => {
        if (err.response?.data?.message) {
          swalError(err);
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div className="flex flex-col justify-around w-full px-6 text-white rounded-lg md:items-center md:justify-between md:h-20 h-36 md:flex-row lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl bg-light-gray">
    <div className="flex items-center flex-1 gap-8">
      <img
        src={getGroupAvatar(group)}
      />
      <div>
        <div className="text-xl">{groupName}</div>
        <div className="text-sm text-gray-400">{formatMembers(members)}</div>
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
