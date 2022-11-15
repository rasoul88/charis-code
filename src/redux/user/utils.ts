export const fiterUsers = (
  userList: User[],
  prevFilteredUserList: User[],
  searchTxt: string
) => {
  const newFilteredUserList = userList.filter((user) =>
    user.username.includes(searchTxt)
  );

  if (newFilteredUserList.length > 0) {
    return newFilteredUserList;
  } else {
    return prevFilteredUserList;
  }
};
