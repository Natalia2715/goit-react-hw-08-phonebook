const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.name;
const getToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getToken,
};

export default authSelectors;
