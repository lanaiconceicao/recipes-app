export const validateEmail = (email) => {
  const pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
};

export const validatePassword = (password) => {
  const lengthPassword = 6;
  return password.length > lengthPassword;
};
