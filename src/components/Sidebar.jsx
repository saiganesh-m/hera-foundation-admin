// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Overview", path: "/dashboard" },
    { name: "Analytics", path: "/analytics" },
    { name: "Users", path: "/users" },
    { name: "Content", path: "/content" },
    { name: "YouTube Analytics", path: "/youtube-analytics" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <div className={styles.sidebar}>
      {/* Header */}
      <div className={styles.sidebarHeader}>
        <h1>Hera Admin</h1>
        <p>Dashboard</p>
      </div>

      {/* Menu */}
      <nav className={styles.sidebarMenu}>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`${styles.menuItem} ${
              location.pathname === item.path ? styles.active : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
