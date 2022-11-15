import { combineReducers } from "redux";
import UserReducer from "./user/reducer";
import ProductReducer from "./product/reducer";
import SelectedItemsReducer from "./selected-items/reducer";

export default combineReducers({
  user: UserReducer,
  product: ProductReducer,
  selectedItems: SelectedItemsReducer,
});
