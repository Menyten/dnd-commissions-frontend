export default /* GraphQL */ `
  query($searchString: String) {
    fetchProducts(query: $searchString) {
      _id
      shopId
      productTitle
      productDescription
      price
    }
  }
`;
