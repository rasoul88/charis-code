import productActionTypes from "./action-types";
import { fiterProducts } from "./utils";

const INIT_STATE: ProductState = {
  productList: [],
  filteredProductList: [],
};

const Reducer = (state = INIT_STATE, action: Action) => {
  switch (action.type) {
    case productActionTypes.SET_PRODUCT_LIST: {
      return {
        ...state,
        productList: action.payload,
        filteredProductList: action.payload,
      };
    }

    case productActionTypes.FILTER_PRODUCT_LIST: {
      return {
        ...state,
        filteredProductList: fiterProducts(
          state.productList,
          state.filteredProductList,
          action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default Reducer;
