export default /* GraphQL */ `
  mutation($shopTitle: String!, $shopDescription: String!) {
    createShop(shopTitle: $shopTitle, shopDescription: $shopDescription) {
      _id
      shopTitle
      shopDescription
    }
  }
`;
