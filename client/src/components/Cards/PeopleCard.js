import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAllGroups, addPrivateGroups } from "../../store/actions/actionCreator";
import {
  newChatFromExplore,
  openChat,
  sendFriendRequest,
} from "../../store/middlewares/thunk";
import { swalError } from "../../util/swal";

export default function PeopleCard({
  id,
  avatarUrl,
  username,
  country,
  languages,
  interests,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const triggerSendFriendRequest = () => {
    dispatch(sendFriendRequest(id));
  };

  const triggerNewChat = () => {
    dispatch(newChatFromExplore(id))
    .then((data) => {
        data.Messages = [];
        dispatch(addAllGroups(data));
        dispatch(addPrivateGroups(data));
        dispatch(openChat(data, dispatch));
        navigate("/home/chats");
    })
    .catch((err) => {
      swalError(err)
      console.log(err);
    })
  };

  return (
    <div className="w-full p-0 py-2 md:p-4 h-96 2xl:h-full max-h-[400px] min-h-[400px]">
      <div className="flex flex-col items-center justify-between w-full h-full px-4 text-white rounded-lg bg-light-gray">
        <div className="flex justify-center w-full mt-5">
          <img
            alt="Paul Clapton"
            src={avatarUrl}
            className="object-cover w-1/4 rounded-lg shadow-sm aspect-square"
          />
        </div>
        <div className="flex flex-col items-center justify-between w-full">
          <div className="text-lg 2xl:text-xl">{username}</div>
          <div className="text-sm text-gray-300 2xl:text-lg">{country}</div>
        </div>
        <div className="flex justify-between w-full text-sm 2xl:text-base">
          <div className="text-gray-400">Native</div>
          <div>
            {languages.map((language) => {
              if (language.type === "native") {
                return (
                  <div key={`${language.id}`}>{language.Language.name}</div>
                );
              }
            })}
          </div>
        </div>
        <div className="flex justify-between w-full text-sm 2xl:text-base">
          <div className="text-gray-400">Learning</div>
          <div className="w-1/2 text-right">
            {languages.map((language) => {
              if (language.type === "interest") {
                return (
                  <div key={`${language.id}`}>{language.Language.name}</div>
                );
              }
            })}
          </div>
        </div>
        <div className="text-base font-semibold 2xl:text-lg">Interests</div>
        <div className="flex flex-wrap items-center justify-center w-full gap-2 mb-3 text-xs text-center md:text-sm lg:text-xs 2xl:text-base">
          {interests.map((interest) => {
            return (
              <span
                key={interest.id}
                className="px-3 py-1 text-gray-200 rounded-full bg-black-blue ">
                {interest.Interest.name}
              </span>
            );
          })}
        </div>
        <div className="flex justify-center w-full gap-2 mb-5 text-sm">
          {/* Send friend request */}
          <button
            onClick={triggerSendFriendRequest}
            className="inline-block w-full p-2 text-center text-white border rounded-lg bg-main-color border-main-color hover:bg-black-blue hover:border-black-blue focus:outline-none focus:ring active:text-main-color md:w-fit">
            <span className="sr-only"> Add Friend </span>
            Add Friend
          </button>
          <button
            className="inline-block w-full p-2 text-center text-white border rounded-lg bg-main-color border-main-color hover:bg-black-blue hover:border-black-blue focus:outline-none focus:ring active:text-main-color md:w-fit"
            onClick={triggerNewChat}>
            <span className="sr-only"> Chat </span>
            Chat
          </button>
        </div>
      </div>
    </div>
  );
}
