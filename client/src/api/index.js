import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchUsers = () => API.get("/");
export const createUser = (newUser) => API.post("/signup", newUser);
export const signIn = (data) => API.post("/signin", data);
export const googlSignIn = () => API.get("/google");

export const createJobPost = (post) => API.post("/dashboard/postjob", post);
export const fetchjobs = () => API.get("/dashboard/getjobs");
