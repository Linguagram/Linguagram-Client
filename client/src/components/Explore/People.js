import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFriends,
  handleFetchExploreUsers,
} from "../../store/middlewares/thunk";
import PeopleCard from "../Cards/PeopleCard";
import { swalError } from "../../util/swal";

export default function People() {
  const dispatch = useDispatch();
  const { friends } = useSelector((state) => state.friendReducer);
  const { users } = useSelector((state) => state.exploreReducer);
  const [filteredPeople, setFilteredPeople] = useState([]);

  // useEffect(() => {
  //   dispatch(handleFetchExploreUsers())
  //     .then((_) => {
  //       return
  //     })
  //     .catch((err) => {
  //       if (err.response?.data?.message) {
  //         swalError(err);
  //       } else {
  //         console.log(err);
  //       }
  //     });
  // }, []);

  useEffect(() => {
    dispatch(handleFetchExploreUsers());
    dispatch(getFriends())
      .then(dispatch(handleFetchExploreUsers()))
      .then((_) => {
        const mappedFriends = friends.map((el) => {
          return el.Friend;
        });

        let filtered = [];

        users.forEach((user) => {
          let result = false;
          for (let i = 0; i < mappedFriends.length; i++) {
            if (user.id !== mappedFriends[i].id) filtered.push(user);
          }
        });

        console.log(filtered);

        setFilteredPeople(filtered);

      })
      .catch(console.log);
  }, []);

  return (
    <div className="grid justify-center w-full h-full grid-cols-1 px-4 mx-auto mt-8 overflow-auto md:px-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 scrollbar-hide">
      {filteredPeople.map((user) => {
        return (
          <PeopleCard
            key={user.id}
            id={user.id}
            avatarUrl={user.Avatar.url}
            username={user.username}
            country={user.country}
            languages={user.UserLanguages}
            interests={user.UserInterests}
          />
        );
      })}
    </div>
  );
}
