const friends = [
  { username: "Sissie Forrest" },
  { username: "Krispin Admin" },
  { username: "Nev Matusovsky" },
  { username: "Ashleigh Brabban" },
  { username: "Beryle Glaisner" },
  { username: "Aguistin Pipping" },
  { username: "Isa Yesson" },
  { username: "Oliy Portwain" },
  { username: "adey Carbonell" },
  { username: "Dori Rogers" },
];

const getFriendsFirstLetter = (friends) => {
  let result = [];
  friends.forEach((friend) => {
    const found = result.find(
      (el) => el.toLowerCase() == friend.Friend.username[0].toLowerCase()
    );
    if (!found) result.push(friend.Friend.username[0]);
  });
  result.sort();
  return result;
};

const sortFriendsByFirstLetter = (friends) => {
  let result = {};
  const firstLetters = getFriendsFirstLetter(friends);

  firstLetters.forEach((letter) => (result[letter] = []));
  friends.forEach((friend) => {
    result[friend.Friend.username[0].toUpperCase()].push(friend);
  });

  for (let [key, value] of Object.entries(result)) {
    value.sort((val1, val2) => {
      const userA = val1.Friend.username.toLowerCase();
      const userB = val2.Friend.username.toLowerCase();

      if (userA > userB) {
        console.log(userA > userB);
        return 1;
      }

      if (userA < userB) {
        console.log(userA < userB);
        return -1;
      }

      return 0;
    });
  }

  return result;
};

export { getFriendsFirstLetter, sortFriendsByFirstLetter };
