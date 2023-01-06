import PeopleCard from "../Cards/PeopleCard";

export default function People() {
  return (
    <div className="grid justify-center w-full h-full grid-cols-2 px-8 mx-auto mt-8 overflow-auto lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 scrollbar-hide">
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
