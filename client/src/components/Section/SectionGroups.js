import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setHomeDrawer, setOpenChat } from "../../store/actions/actionCreator";
import { handleFetchMessagesByGroupId, handleSetCounterpartUser } from "../../store/middlewares/thunk";

export default function SectionGroups() {
  const dispatch = useDispatch();
  const { groupGroups } = useSelector((state) => state.groupReducer);

  function openChat(group) {
    dispatch(handleFetchMessagesByGroupId(group.id))
    .then((_) => {
      dispatch(handleSetCounterpartUser(group))
      dispatch(setOpenChat(true));
    })
  }
  
  return (
    <>
      <div className="flex items-center justify-between mb-4 text-xl md:mb-8">
        <div className="flex gap-3">
          <button
            className="md:hidden"
            onClick={() => dispatch(setHomeDrawer(true))}
          >
            <FontAwesomeIcon className="text-xl text-white" icon="bars" />
          </button>
          <h4 className="text-white">Groups</h4>
        </div>
        <FontAwesomeIcon
          className="text-gray-400 small-icons"
          icon="user-group"
        />
      </div>

      <div className="flex items-center w-full rounded h-14 bg-light-gray lg:h-18">
        <div className="flex items-center justify-center w-1/6">
          <FontAwesomeIcon className="text-gray-400" icon="magnifying-glass" />
        </div>
        <div className="flex w-5/6">
          <input
            className="pr-4 text-white bg-transparent focus:border-none focus:outline-none"
            type="text"
            placeholder="Search groups"
          ></input>
        </div>
      </div>

      <div className="flex flex-col h-full gap-3 mt-5 overflow-y-auto scrollbar-hide">
        {groupGroups &&
          groupGroups.map((group) => {
            return (
              <div
                key={group.id}
                onClick={() => openChat(group)}
                className="flex items-center gap-4 p-2 rounded cursor-pointer hover:bg-gray-700"
              >
                <div className="flex items-center justify-center w-12 h-10 font-bold text-gray-500 rounded-full bg-main-color-blur">
                  G
                </div>
                <div className="flex items-center justify-between w-full">
                  <h4 className="text-base text-white">{group.name}</h4>
                  {
                    group.unreadMessageCount > 0 &&
                      <div className="h-5 text-sm font-bold text-center text-red-700 bg-red-900-blur w-7">
                        { group.unreadMessageCount }
                      </div>
                  }
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
