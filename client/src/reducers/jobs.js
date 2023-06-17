export default (jobs = [], action) => {
  switch (action.type) {
    case "FETCH":
      return action.payload;
    case "POST":
      return [...jobs, action.payload];
    default:
      return jobs;
  }
};
