import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFriends,
  handleFetchExploreUsers,
} from "../../store/middlewares/thunk";
import PeopleCard from "../Cards/PeopleCard";
import { swalError } from "../../util/swal";
import { getUserAvatar } from "../../util/getAvatar";

export default function People() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.exploreReducer);
  const { thisUser } = useSelector((state) => state.userReducer);

  useEffect(() => {
    console.log({ thisUser });
    dispatch(handleFetchExploreUsers())
      .then((_) => {
        return;
      })
      .catch((err) => {
        if (err.response?.data?.message) {
          swalError(err);
        } else {
          console.log(err);
        }
      });
  }, []);

  console.log(users);

  return (
    <>
      <div className="justify-center w-full h-full px-4 mx-auto mt-8 overflow-auto md:px-8 scrollbar-hide">
        <div className="w-full flex justify-center mt-8 items-center">
          <div className="text-white px-2 text-center">
            {users ? (
              <>
                <div className="text-xl font-bold mb-2">
                  {users.length} people are native to <br className="" />{" "}
                  language you want to learn
                </div>
                <div className="text-base">
                  Send them friend request or start a chat
                </div>
              </>
            ) : (
              <div>Oops, no matching user</div>
            )}
          </div>
        </div>
        <div className="grid justify-center w-full h-full grid-cols-1 px-4 mx-auto mt-8 md:px-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 scrollbar-hide">
          {users.map((user) => {
            return (
              <PeopleCard
                key={user.id}
                id={user.id}
                avatarUrl={getUserAvatar(user)}
                username={user.username}
                country={user.country}
                languages={user.UserLanguages}
                interests={user.UserInterests}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
