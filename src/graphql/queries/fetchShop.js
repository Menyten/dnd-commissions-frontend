export default /* GraphQL */ `
  query($shopId: ID) {
    fetchShop(shopId: $shopId) {
      _id
      shopTitle
      shopDescription
      shopImage
      owner {
        _id
        username
      }
      reviews {
        text
        rating
        username
      }
      products {
        _id
        productTitle
        productDescription
        price
      }
      displayProducts {
        _id
        image
        description
      }
    }
  }
`;
