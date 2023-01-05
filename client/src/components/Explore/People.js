import PeopleCard from "../Cards/PeopleCard";

export default function People() {
  return (
    <div className="grid w-full h-full grid-cols-4 gap-10 px-8 mx-auto mt-8 overflow-y-auto scrollbar-hide">
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
    </div>
  );
}
