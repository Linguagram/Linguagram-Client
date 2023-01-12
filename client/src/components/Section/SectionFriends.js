import React, { useState, useEffect } from "react";
import FriendRequest from "../Modal/FriendRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setHomeDrawer } from "../../store/actions/actionCreator";
import { getFriends } from "../../store/middlewares/thunk";
import {
  getFriendsFirstLetter,
  sortFriendsByFirstLetter,
} from "../../util/friendFilters";
import FriendCardContainers from "../Containers/FriendCardContainers";

export default function SectionFriends() {
  const { friends, friendRequests } = useSelector(
    (state) => state.friendReducer
  );
  const [firstLetters, setFirstLetters] = useState([]);
  const [sortedFriends, setSortedFriends] = useState({});
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();
  const [isFriendRequestModalVisible, setisFriendRequestModalVisible] =
    useState(false);

  const handleCloseFriendRequestModal = () =>
    setisFriendRequestModalVisible(false);

  useEffect(() => {
    dispatch(getFriends())
      .catch(console.log);
  }, []);

  useEffect(() => {
    const letters = getFriendsFirstLetter(friends);
    const sorted = sortFriendsByFirstLetter(friends);
    setFirstLetters(letters);
    setSortedFriends(sorted);
  }, [friends]);

  useEffect(() => {
    const filtered = query === ''
      ? friends
      : friends.filter((friend) => {
          return friend.Friend.username.toLowerCase().includes(query.toLowerCase());
        });
    
    const letters = getFriendsFirstLetter(filtered);
    const sorted = sortFriendsByFirstLetter(filtered);
    setFirstLetters(letters);
    setSortedFriends(sorted);
  }, [query])

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
        <div className="relative">
        {friendRequests.length > 0 ? <div className="absolute z-50 h-2 bg-red-500 rounded-full aspect-square inset-x-3 inset-y-1"></div> : ""}
          <FontAwesomeIcon
            onClick={() => setisFriendRequestModalVisible(true)}
            className="relative text-gray-400 cursor-pointer small-icons"
            icon="bell"
          />
        </div>
      </div>

      <div className="flex items-center w-full rounded h-14 bg-light-gray lg:h-18">
        <div className="flex items-center justify-center w-1/6">
          <FontAwesomeIcon className="text-gray-400" icon="magnifying-glass" />
        </div>
        <div className="flex w-5/6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pr-4 text-white bg-transparent focus:border-none focus:outline-none"
            type="text"
            placeholder="Search friend"></input>
        </div>
      </div>

      <div className="flex flex-col h-full gap-3 mt-5 overflow-y-auto scrollbar-hide">
        {firstLetters.map((letter, idx) => {
          return (
            <FriendCardContainers
              key={idx}
              letter={letter}
              friends={sortedFriends[letter]}
            />
          );
        })}
      </div>

      <FriendRequest
        onClose={handleCloseFriendRequestModal}
        visible={isFriendRequestModalVisible}
        friendRequests={friendRequests}
      />
    </>
  );
}
