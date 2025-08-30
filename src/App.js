// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"; 
import DashboardOverview from "./pages/Dashboard/DashboardOverview";
import Analytics from "./pages/Dashboard/Analytics"; 
import Users from "./pages/Dashboard/Users";  
import Content from "./pages/Dashboard/Content";  
import Profile from "./pages/Dashboard/Profile"; 
import YoutubeAnalytics from "./pages/Dashboard/YoutubeAnalytics"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />

        {/* Dashboard Pages */}
        <Route path="/dashboard" element={<DashboardOverview />} />
        <Route path="/analytics" element={<Analytics />} /> 
        <Route path="/users" element={<Users />} /> 
        <Route path="/content" element={<Content />} /> {/* ✅ Added Content route */}
        <Route path="/profile" element={<Profile />} /> {/* ✅ New route */}
         <Route path="/youtube-analytics" element={<YoutubeAnalytics />} />
      </Routes>
    </Router>
  );
}

export default App;
