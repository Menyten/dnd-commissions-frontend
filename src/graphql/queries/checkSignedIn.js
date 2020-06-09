export default /* GraphQL */ `
  query {
    checkSignedIn {
      token
      user {
        _id
        username
        firstname
        lastname
        email
        role
      }
    }
  }
`;
