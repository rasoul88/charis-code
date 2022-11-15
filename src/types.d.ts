interface User {
  id: number;
  username: string;
  email: string;
  [key: string]: any;
}

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  [key: string]: any;
}

interface UserState {
  userList: User[];
  filteredUserList: User[];
}

interface ProductState {
  productList: Product[];
  filteredProductList: Product[];
}

interface SelectedItemsState {
  selectedItems: string[];
}

interface State {
  user: UserState;
  product: ProductState;
  selectedItems: SelectedItemsState;
}

interface Action {
  type: string;
  payload?: any;
}
