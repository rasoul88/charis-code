import React from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { ProductsCard, ListContainer } from "./index.styles";
import { filterProductList, getProductList } from "../../redux/product/actions";
import { clearSelectedItems } from "../../redux/selected-items/actions";
import SearchInput from "../common/search-input";
import Item from "../common/list-item";

const ProductListCard = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const filteredProductList = useSelector(
    (state: State) => state.product.filteredProductList
  );

  React.useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <ProductsCard>
      <SearchInput
        onChange={(newValue) => dispatch(filterProductList(newValue))}
      />
      <ListContainer>
        {filteredProductList?.map((product: Product) => (
          <Item
            key={product.id}
            primaryText={product.title}
            secondaryText={product.description}
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
    </ProductsCard>
  );
};

export default ProductListCard;
