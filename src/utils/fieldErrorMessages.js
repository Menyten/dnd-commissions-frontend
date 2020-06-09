export const getFieldErrorMessages = (errors, name) => {
  if (errors[name] && errors[name].type === 'required')
    return 'This field is required';
  if (errors[name] && errors[name].type === 'minLength')
    return 'Field must be a minimum of 8 characters.';
  if (errors[name] && errors[name].type === 'pattern')
    return 'Incorrect email address.';
  if (errors[name] && errors[name].type === 'validate')
    return 'Must be the same as password';
};
