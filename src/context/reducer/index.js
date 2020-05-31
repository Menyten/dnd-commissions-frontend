export default (state, { type, payload }) => {
  switch (type) {
    case 'SIGN_IN_USER':
      return { ...state, user: payload };
    case 'SIGN_OUT_USER':
      return { ...state, user: null };
    case 'SET_TOKEN':
      return { ...state, token: payload };
    default:
      return state;
  }
};
