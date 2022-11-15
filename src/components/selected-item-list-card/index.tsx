import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Chip } from "@mui/material";
import { CardContainer, ChipsContainer } from "./index.styles";
import { Dispatch } from "redux";
import { removeFromSelectedItems } from "../../redux/selected-items/actions";

const SelectedItemListCard = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const selectedItems = useSelector(
    (state: State) => state.selectedItems.selectedItems
  );

  return (
    <CardContainer>
      {selectedItems?.length > 0 && (
        <>
          <Typography variant="body1" color="inherit">
            Tap to delete
          </Typography>
          <ChipsContainer>
            {selectedItems.map((item, index) => (
              <Chip
                key={index}
                style={{ margin: "5px", maxWidth: "380px" }}
                color="primary"
                label={item}
                onClick={() => dispatch(removeFromSelectedItems(index))}
              />
            ))}
          </ChipsContainer>
        </>
      )}
    </CardContainer>
  );
};

export default SelectedItemListCard;
