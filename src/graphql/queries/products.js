export default /* GraphQL */ `
  query {
    products {
      _id
      shop {
        _id
        shopTitle
      }
      productTitle
      productDescription
      price
    }
  }
`;
