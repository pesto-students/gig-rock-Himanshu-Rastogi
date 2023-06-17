const authReducer = (auth = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return [...auth, action.payload];
    case "LOGIN":
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return action.payload;
    case "LOGOUT":
      localStorage.clear();
      return { auth: null };
    default:
      return auth;
  }
};

export default authReducer;
