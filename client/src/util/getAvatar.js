export const getUserAvatar = (thisUser) => {
  return thisUser?.Avatar?.url
    ? thisUser.Avatar.url
    : `https://ui-avatars.com/api/?name=${encodeURI(thisUser.username || thisUser.name)}`
}

export const getGroupAvatar = (payload, thisUser) => {
  switch (payload.type) {
    case 'dm':
        const counterUser = payload.GroupMembers.find(el => el.UserId !== thisUser.id)
        return counterUser.User.Avatar?.url
        ? counterUser.User.Avatar.url
        : `https://ui-avatars.com/api/?name=${encodeURI(counterUser.User.username)}`
    case 'group':
        return `https://ui-avatars.com/api/?name=${encodeURI(payload.name)}`
  
    default:
      break;
  }
}