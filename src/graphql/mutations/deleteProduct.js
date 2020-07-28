export default /* GraphQL */ `
  mutation($id: ID!) {
    deleteProduct(id: $id) {
      _id
      productTitle
      productDescription
      price
    }
  }
`;
