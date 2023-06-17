import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./screens/home/HomePage";
import JobsPage from "./screens/JobsPage";
import DashboardPage from "./screens/DashboardPage";
import ApplicationPage from "./screens/ApplicationPage";
import ProfilePage from "./screens/profile/ProfilePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/jobspage" element={<JobsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/apply" element={<ApplicationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
