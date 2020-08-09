export default /* GraphQL */ `
  query($id: ID!) {
    product(id: $id) {
      _id
      shop {
        _id
        shopTitle
        shopDescription
      }
      productTitle
      productDescription
      price
    }
  }
`;
