import React from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { UsersCard, ListContainer } from "./index.styles";
import { filterUserList, getUserList } from "../../redux/user/actions";
import { clearSelectedItems } from "../../redux/selected-items/actions";
import Item from "../common/list-item";
import SearchInput from "../common/search-input";

const UserListCard = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const filteredUserList = useSelector(
    (state: State) => state.user.filteredUserList
  );

  React.useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <UsersCard>
      <SearchInput
        onChange={(newValue) => dispatch(filterUserList(newValue))}
      />
      <ListContainer>
        {filteredUserList?.map((user: User) => (
          <Item
            key={user.id}
            primaryText={user.username}
            secondaryText={user.email}
          />
        ))}
      </ListContainer>
      <Button
        variant="contained"
        fullWidth={true}
        onClick={() => dispatch(clearSelectedItems())}
      >
        CLEAR LIST
      </Button>
    </UsersCard>
  );
};

export default UserListCard;
