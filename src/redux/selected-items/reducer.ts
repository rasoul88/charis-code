import selectedItemsActionTypes from "./action-types";

const INIT_STATE: SelectedItemsState = {
  selectedItems: [],
};

const Reducer = (state = INIT_STATE, action: Action) => {
  switch (action.type) {
    case selectedItemsActionTypes.ADD_TO_SELECTED_ITEMS: {
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
      };
    }

    case selectedItemsActionTypes.REMOVE_FROM_SELECTED_ITEMS: {
      return {
        ...state,
        selectedItems: state.selectedItems.filter(
          (_, index) => index !== action.payload
        ),
      };
    }

    case selectedItemsActionTypes.CLEAR_SELECTED_ITEMS: {
      return {
        ...state,
        selectedItems: [],
      };
    }

    default:
      return state;
  }
};

export default Reducer;
