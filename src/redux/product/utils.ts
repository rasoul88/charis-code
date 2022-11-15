export const fiterProducts = (
  productList: Product[],
  prevFilteredProductList: Product[],
  searchTxt: string
) => {
  const newFilteredProductList = productList.filter((product) =>
    product.title.includes(searchTxt)
  );

  if (newFilteredProductList.length > 0) {
    return newFilteredProductList;
  } else {
    return prevFilteredProductList;
  }
};
