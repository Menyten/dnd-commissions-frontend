export default /* GraphQL */ `
  query {
    me {
      token
      user {
        _id
        username
        firstname
        lastname
        email
        role
        shopId
      }
    }
  }
`;
