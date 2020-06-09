export default /* GraphQL */ `
  mutation($shopTitle: String!, $shopDescription: String!) {
    createShop(
      shopInput: { shopTitle: $shopTitle, shopDescription: $shopDescription }
    ) {
      shopTitle
    }
  }
`;
