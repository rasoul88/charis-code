import UserActionTypes from "./action-types";
import { fiterUsers } from "./utils";

const INIT_STATE: UserState = {
  userList: [],
  filteredUserList: [],
};

const Reducer = (state = INIT_STATE, action: Action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER_LIST: {
      return {
        ...state,
        userList: action.payload,
        filteredUserList: action.payload,
      };
    }

    case UserActionTypes.FILTER_USER_LIST: {
      return {
        ...state,
        filteredUserList: fiterUsers(
          state.userList,
          state.filteredUserList,
          action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default Reducer;
