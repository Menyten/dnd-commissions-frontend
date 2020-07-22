export default /* GraphQL */ `
  mutation(
    $username: String!
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
    $birthdate: String!
  ) {
    createAccount(
      username: $username
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
      birthdate: $birthdate
    )
  }
`;
