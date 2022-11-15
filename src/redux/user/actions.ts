import userActionTypes from "./action-types";
import { Dispatch } from "redux";

export const setUserList = (userList: User[]) => ({
  type: userActionTypes.SET_USER_LIST,
  payload: userList,
});

export const getUserList = () => {
  return (dispatch: Dispatch) => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((res) => {
        dispatch(setUserList(res as User[]));
      });
  };
};

export const filterUserList = (searchTxt: string) => ({
  type: userActionTypes.FILTER_USER_LIST,
  payload: searchTxt,
});
