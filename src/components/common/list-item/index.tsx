import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { addToSelectedItems } from "../../../redux/selected-items/actions";

interface Props {
  primaryText: string;
  secondaryText: string;
}

const Item = ({ primaryText, secondaryText }: Props) => {
  const dispatch: Dispatch<any> = useDispatch();
  return (
    <ListItem
      style={{ cursor: "pointer" }}
      onClick={() => dispatch(addToSelectedItems(primaryText))}
    >
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </ListItem>
  );
};

export default Item;
