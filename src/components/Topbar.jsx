import React from "react";
import { useLocation } from "react-router-dom"; // Import hook
import styles from "./Topbar.module.css";

const Topbar = () => {
  const location = useLocation();

  // Define titles for each route
  const pageTitles = {
    "/dashboardoverview": "Dashboard Overview",
    "/analytics": "Analytics",
    "/users": "Users",
    "/profile": "Profile",
  };

  // Default to "Dashboard" if no match
  const currentTitle = pageTitles[location.pathname] || "Dashboard";

  return (
    <div className={styles.topbarContainer}>
      <div className={styles.topbarContent}>
        <div className={styles.topbarText}>
          <h1 className={styles.pageTitle}>{currentTitle}</h1>
          <p className={styles.pageSubtitle}>
            Track and analyze user activity and engagement metrics
          </p>
        </div>
        <button className={styles.exportButton}>Export CSV</button>
      </div>
    </div>
  );
};

export default Topbar;
