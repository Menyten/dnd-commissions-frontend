export default /* GraphQL */ `
  mutation(
    $username: String!
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
    $age: String!
  ) {
    createAccount(
      accountInput: {
        username: $username
        firstname: $firstname
        lastname: $lastname
        email: $email
        password: $password
        age: $age
      }
    )
  }
`;
