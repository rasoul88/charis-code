import selectedItemsActionTypes from "./action-types";

export const addToSelectedItems = (item: string) => ({
  type: selectedItemsActionTypes.ADD_TO_SELECTED_ITEMS,
  payload: item,
});

export const removeFromSelectedItems = (index: number) => ({
  type: selectedItemsActionTypes.REMOVE_FROM_SELECTED_ITEMS,
  payload: index,
});

export const clearSelectedItems = () => ({
  type: selectedItemsActionTypes.CLEAR_SELECTED_ITEMS,
});
