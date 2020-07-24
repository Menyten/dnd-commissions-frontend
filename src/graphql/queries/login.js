export default /* GraphQL */ `
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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
