export default /* GraphQL */ `
  query($email: String!, $password: String!) {
    signIn(signInInput: { email: $email, password: $password }) {
      token
      user {
        _id
        username
        firstname
        lastname
        email
      }
    }
  }
`;
