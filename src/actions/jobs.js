import * as api from "../api";

export const getJobs =
  (query = {}) =>
  async (dispatch) => {
    try {
      const { data } = await api.fetchjobs(query);

      dispatch({ type: "FETCH", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const postAJob = (post) => async (dispatch) => {
  try {
    const { data } = await api.createJobPost(post);
    console.log("postAJob data:", data);
    dispatch({ type: "POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
