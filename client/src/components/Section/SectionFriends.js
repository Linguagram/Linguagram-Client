import React, { useState, useEffect } from "react";
import FriendRequest from "../Modal/FriendRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setHomeDrawer } from "../../store/actions/actionCreator";
import { getFriends } from "../../store/middlewares/thunk";
import FriendCard from "../Cards/FriendCard";

export default function SectionFriends() {
  const { friends, friendRequests } = useSelector(
    (state) => state.friendReducer
  );
  const dispatch = useDispatch();
  const [isFriendRequestModalVisible, setisFriendRequestModalVisible] =
    useState(false);

  const handleCloseFriendRequestModal = () =>
    setisFriendRequestModalVisible(false);

  useEffect(() => {
    dispatch(getFriends())
      .then((_) => {
        return;
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between mb-4 text-xl md:mb-8">
        <div className="flex gap-3">
          <button
            className="md:hidden"
            onClick={() => dispatch(setHomeDrawer(true))}>
            <FontAwesomeIcon className="text-xl text-white" icon="bars" />
          </button>
          <h4 className="text-white">Friends</h4>
        </div>
        <FontAwesomeIcon
          onClick={() => setisFriendRequestModalVisible(true)}
          className="text-gray-400 cursor-pointer small-icons"
          icon="bell"
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
            placeholder="Search friend"></input>
        </div>
      </div>

      <div className="flex flex-col h-full gap-3 mt-5 overflow-y-auto scrollbar-hide">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <div className="text-main-color">A</div>
            <div className="flex flex-col gap-5 pt-2 pl-2">
            {friends.map(friend => {
              return <FriendCard key={friend.User.id} friend={friend}/>
            })}
              
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <div className="text-main-color">A</div>
            <div className="flex flex-col gap-5 pt-2 pl-2">
              <FriendCard />
            </div>
          </div>
        </div> */}

      </div>

      <FriendRequest
        onClose={handleCloseFriendRequestModal}
        visible={isFriendRequestModalVisible}
        friendRequests={friendRequests}
      />
    </>
  );
}
