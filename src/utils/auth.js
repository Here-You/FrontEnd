const getAuthToken = () => {
  const token = localStorage.getItem('x-access-token');

  return token;
};

const removeAuthToken = () => {
  localStorage.removeItem('x-access-token');
};

export { getAuthToken, removeAuthToken };
