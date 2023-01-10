import GroupCard from "../Cards/GroupCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { swalError } from "../../util/swal";
import { handleFetchExploreGroups } from "../../store/middlewares/thunk";

export default function Groups() {
  const dispatch = useDispatch();
  const { groups } = useSelector((state) => state.exploreReducer);

  useEffect(() => {
    dispatch(handleFetchExploreGroups())
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
  
  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-2 px-4 mx-auto mt-8 overflow-auto md:px-8 2xl:flex 2xl:flex-col 2xl:justify-start">
      {groups.map((group) => {
        return (
          <GroupCard
            key={group.id}
            groupId={group.id}
            groupName={group.name}
            members={group.GroupMembers}
            group={group}
          />
        );
      })}
    </div>
  );
}
