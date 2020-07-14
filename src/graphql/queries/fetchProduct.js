export default /* GraphQL */ `
  query($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      shopId
      productTitle
      productDescription
      price
    }
  }
`;
