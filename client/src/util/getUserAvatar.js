export const getUserAvatar = (thisUser) => {
  return thisUser.Avatar?.url
    ? thisUser.Avatar.url
    : `https://ui-avatars.com/api/?name=${encodeURI(thisUser.username || thisUser.name)}`
}
