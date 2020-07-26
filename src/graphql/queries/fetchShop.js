export default /* GraphQL */ `
  query($id: ID) {
    shop(id: $id) {
      _id
      shopTitle
      shopDescription
      shopImage
      owner {
        _id
        username
      }
      products {
        _id
        productTitle
        productDescription
        price
      }
    }
  }
`;
