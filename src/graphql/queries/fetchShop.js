export default /* GraphQL */ `
  query($shopId: ID) {
    fetchShop(shopId: $shopId) {
      _id
      shopkeeperId
      shopTitle
      shopDescription
      shopImage
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
