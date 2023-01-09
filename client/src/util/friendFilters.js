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
    if(localStorage.user_id == friend.UserId) {
      const found = result.find(
        (el) => el.toLowerCase() == friend.Friend.username[0].toLowerCase()
      );
      if (!found) result.push(friend.Friend.username[0]);
    } else {
      const found = result.find(
        (el) => el.toLowerCase() == friend.User.username[0].toLowerCase()
      );
      if (!found) result.push(friend.User.username[0]);
    }

  });
  result.sort();
  return result;
};

const sortFriendsByFirstLetter = (friends) => {
  let result = {};
  const firstLetters = getFriendsFirstLetter(friends);

  firstLetters.forEach((letter) => (result[letter] = []));

  friends.forEach((friend) => {
    if(localStorage.user_id == friend.UserId) {
      result[friend.Friend.username[0].toUpperCase()].push(friend.Friend);
    } else {
      result[friend.User.username[0].toUpperCase()].push(friend.User);
    }
  });
  console.log({result} ,'<<<< from sortFriendsByFirstLetter', 'after pushed')
  for (let [key, value] of Object.entries(result)) {
    value.sort((val1, val2) => {
      const userA =  val1.username.toLowerCase()
      const userB =  val2.username.toLowerCase()

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
  console.log({result})
  return result;
};

export { getFriendsFirstLetter, sortFriendsByFirstLetter };
