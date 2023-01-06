import PeopleCard from "../Cards/PeopleCard";

export default function People() {
  return (
    <div className="flex flex-wrap justify-center w-full h-full gap-10 px-8 mx-auto mt-8 overflow-auto scrollbar-hide">
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
    </div>
  );
}
