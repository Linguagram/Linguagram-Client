import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllGroups,
  setFilteredGroups,
  setHomeDrawer,
} from "../../store/actions/actionCreator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getGroupAvatar } from "../../util/getAvatar";
import { openChat } from "../../store/middlewares/thunk";

export default function SectionChats() {
  const dispatch = useDispatch();
  // const [readMsg, setReadMsg] = useState(false)

  const { allGroups } = useSelector((state) => state.groupReducer);
  const { filteredGroups } = useSelector((state) => state.groupReducer);
  const { thisUser } = useSelector((state) => state.userReducer);

  
  useEffect(() => {
    if(allGroups.length) dispatch(setFilteredGroups(allGroups))
  }, [allGroups])

  const handleChange = (e) => {
    console.log(e.target.value)

    const newFilteredGroups = allGroups.filter(el =>  {
      for(let i=0;i<el.GroupMembers.length;i++) {
        if(el.GroupMembers[i].User.username.toLowerCase().includes(e.target.value.toLowerCase())) return el        
      }
    })

    dispatch(setFilteredGroups(newFilteredGroups))
  }

  console.log(filteredGroups, 'filteredgroups di reducer')

  const handleOpenChat = (group) => {
    dispatch(openChat(group, dispatch));
  }

  console.log(allGroups, "<<<<<< allGroups SectionChat");

  return (
    <>
      <div className="flex items-center gap-3 mb-4 text-xl text-white md:mb-8">
        <button
          onClick={() => dispatch(setHomeDrawer(true))}
          className="md:hidden"
        >
          <FontAwesomeIcon className="text-xl text-white" icon="bars" />
        </button>
        <div>Chats</div>
      </div>

      <div className="flex items-center w-full rounded h-14 bg-light-gray lg:h-18">
        <div className="flex items-center justify-center w-1/6">
          <FontAwesomeIcon className="text-gray-400" icon="magnifying-glass" />
        </div>
        <div className="flex w-5/6">
          <input
            className="pr-4 text-white bg-transparent focus:border-none focus:outline-none"
            type="text"
            placeholder="Search users..."
            onChange={handleChange}
          ></input>
        </div>
      </div>

      <div className="flex flex-col h-full gap-3 mt-5 overflow-y-auto scrollbar-hide">
        {filteredGroups &&
          filteredGroups.map((group) => {
            return (
              <div
                key={group.id}
                onClick={() => handleOpenChat(group)}
                className="flex items-center gap-4 p-2 rounded cursor-pointer hover:bg-gray-700"
              >
                {group.type === "dm" ? (
                  <img
                    src={getGroupAvatar(group, thisUser)}
                    className="avatar-chat"
                    alt="avatar"
                  ></img>
                ) : (
                  <img
                    src={getGroupAvatar(group)}
                    className="avatar-chat"
                    alt="avatar"
                  ></img>
                )}

                <div className="flex flex-col w-full gap-1">
                  <div className="flex items-center justify-between">
                    { group.type === "dm" ? (
                      group.GroupMembers[0] &&
                        group.GroupMembers[0].UserId === thisUser.id ? (
                          <h4 className="text-base text-white">
                            {group.GroupMembers[1].User.username}
                          </h4>
                        ) : (
                          <h4 className="text-base text-white">
                            {group.GroupMembers[0].User.username}
                          </h4>
                        )
                    ) : ( 
                        <h4 className="text-base text-white">{group.name}</h4>
                      )}
                    <h5 className="text-sm text-gray-300">
                      {group.Messages.length > 0
                        ? `${group.Messages[0].createdAt.getHours()}.${group.Messages[0].createdAt.getMinutes()}`
                        : null}
                    </h5>
                  </div>
                  <div className="flex items-center justify-between">
                    {
                      group.Messages.length > 0 && group.Messages[0].deleted 
                      ? 
                      (
                        <h4 className="text-sm italic text-gray-500">
                          This message has been deleted.
                        </h4>
                      ) 
                      : 
                      (
                        group.Messages.length > 0
                        ?
                        (
                          <h4 className="text-sm text-gray-400">
                            {group.Messages.length > 0 &&group.Messages[0].content.length < 20
                              ? group.Messages[0].content
                              : `${group.Messages[0].content.slice(0, 20)}...`}
                          </h4>
                        )
                        :
                        null
                      )
                      
                    }
                    {group.type === "dm" ? (
                      group.unreadMessageCount > 0 ? (
                        <div className="w-5 h-5 text-sm font-bold text-center text-red-700 rounded-full bg-red-900-blur">
                          {group.unreadMessageCount}
                        </div>
                      ) : null
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
