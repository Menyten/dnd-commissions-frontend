export default /* GraphQL */ `
  mutation(
    $shop: ID!
    $productTitle: String!
    $productDescription: String!
    $price: Float!
  ) {
    addProduct(
      shop: $shop
      productTitle: $productTitle
      productDescription: $productDescription
      price: $price
    ) {
      _id
      productTitle
      productDescription
      price
    }
  }
`;
