import React from "react";
import Header from "./components/header";
import { styled } from "@mui/system";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import UserListCard from "./components/user-list-card";
import ProductListCard from "./components/product-list-card";
import SelectedItemListCard from "./components/selected-item-list-card";

export const AppContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});
export const CardsContainer = styled("div")({
  display: "flex",
  gap: "50px",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  margin: "50px",
  minHeight: "calc(100vh - 150px)",
});

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Header />
        <CardsContainer>
          <UserListCard />
          <ProductListCard />
          <SelectedItemListCard />
        </CardsContainer>
      </AppContainer>
    </Provider>
  );
}

export default App;
