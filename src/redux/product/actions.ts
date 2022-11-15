import productActionTypes from "./action-types";
import { Dispatch } from "redux";

export const setProductList = (productList: Product[]) => ({
  type: productActionTypes.SET_PRODUCT_LIST,
  payload: productList,
});

export const getProductList = () => {
  return (dispatch: Dispatch) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        dispatch(setProductList(res as Product[]));
      });
  };
};

export const filterProductList = (searchTxt: string) => ({
  type: productActionTypes.FILTER_PRODUCT_LIST,
  payload: searchTxt,
});
