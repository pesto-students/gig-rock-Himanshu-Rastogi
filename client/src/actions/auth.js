import * as api from "../api";

export const getUser = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const signUpUser = (newUser, navigate) => async (dispatch) => {
  try {
    const { data } = await api.createUser(newUser);
    console.log("data:", data);
    dispatch({ type: "CREATE", payload: data });

    navigate("/dashboard");
  } catch (error) {
    console.log(error.message);
  }
};

export const logInUser = (user, navigate) => async (dispatch) => {
  console.log("data:", user);
  try {
    const { data } = await api.signIn(user);

    dispatch({ type: "LOGIN", payload: data });
    navigate("/dashboard");
  } catch (error) {
    console.log(error.message);
  }
};

export const logOutUser = (navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const googleUserLogin = (navigate) => async (dispatch) => {
  try {
    const { data } = await api.googlSignIn();
    console.log("data:", data);

    dispatch({ type: "LOGIN", payload: data });
    navigate("/dashboard");
  } catch (error) {
    console.log(error.message);
  }
};
