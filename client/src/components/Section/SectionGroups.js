import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setHomeDrawer, setOpenChat } from "../../store/actions/actionCreator";
import { handleFetchMessagesByGroupId, handleSetCounterpartUser } from "../../store/middlewares/thunk";
import { getGroupAvatar } from "../../util/getAvatar";

export default function SectionGroups() {
  const dispatch = useDispatch();
  const { groupGroups } = useSelector((state) => state.groupReducer);

  const [filteredGroupGroups, setFilteredGroupGroups] = useState([])

  function openChat(group) {
    dispatch(handleFetchMessagesByGroupId(group.id))
    .then((_) => {
      dispatch(handleSetCounterpartUser(group))
      dispatch(setOpenChat(group));
    })
  }

  useEffect(() => {
    setFilteredGroupGroups(groupGroups)
  }, [groupGroups])

  const handleChange = (e) => {
    console.log(e.target.value)

    console.log(filteredGroupGroups)

    const newFilteredGroups = groupGroups.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()))

    setFilteredGroupGroups(newFilteredGroups)
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
      </div>

      <div className="flex items-center w-full rounded h-14 bg-light-gray lg:h-18">
        <div className="flex items-center justify-center w-1/6">
          <FontAwesomeIcon className="text-gray-400" icon="magnifying-glass" />
        </div>
        <div className="flex w-5/6">
          <input
            onChange={handleChange}
            className="pr-4 text-white bg-transparent focus:border-none focus:outline-none"
            type="text"
            placeholder="Search groups"
          ></input>
        </div>
      </div>

      <div className="flex flex-col h-full gap-3 mt-5 overflow-y-auto scrollbar-hide">
        {filteredGroupGroups &&
          filteredGroupGroups.map((group) => {
            return (
              <div
                key={group.id}
                onClick={() => openChat(group)}
                className="flex items-center gap-4 p-2 rounded cursor-pointer hover:bg-gray-700"
              >
                <img src={getGroupAvatar(group)} className="avatar-chat" alt="avatar"></img>
                <div className="flex items-center justify-between w-full">
                  <h4 className="text-base text-white">{group.name}</h4>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
