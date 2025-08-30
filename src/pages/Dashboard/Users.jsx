import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Filters from "../../components/Filters";
import StatCard from "../../components/StatCard";
import usersStyles from "./Users.module.css";

const Users = () => {
  const [users] = useState([
    {
      name: "Aisha Khan",
      email: "aisha.khan@example.com",
      company: "Acme Corp",
      journey: "Pregnancy",
      subject: "Health",
      engagement: "High",
      videos: 62,
      avgWatch: "8.4m",
      lastActive: "18-08-2025",
      signup: "01-08-2025",
    },
    {
      name: "Aisha Khan",
      email: "aisha.khan@example.com",
      company: "Acme Corp",
      journey: "Pregnancy",
      subject: "Finance",
      engagement: "Medium",
      videos: 62,
      avgWatch: "7.1m",
      lastActive: "18-08-2025",
      signup: "01-08-2025",
    },
    {
      name: "Aisha Khan",
      email: "aisha.khan@example.com",
      company: "Acme Corp",
      journey: "Pregnancy",
      subject: "Mental Health",
      engagement: "Low",
      videos: 62,
      avgWatch: "6.2m",
      lastActive: "18-08-2025",
      signup: "01-08-2025",
    },
    {
      name: "Aisha Khan",
      email: "aisha.khan@example.com",
      company: "Acme Corp",
      journey: "Pregnancy",
      subject: "Career",
      engagement: "High",
      videos: 62,
      avgWatch: "9.1m",
      lastActive: "18-08-2025",
      signup: "01-08-2025",
    },
    {
      name: "Aisha Khan",
      email: "aisha.khan@example.com",
      company: "Acme Corp",
      journey: "Pregnancy",
      subject: "Health",
      engagement: "Medium",
      videos: 62,
      avgWatch: "3.6m",
      lastActive: "18-08-2025",
      signup: "01-08-2025",
    },
    {
      name: "Aisha Khan",
      email: "aisha.khan@example.com",
      company: "Acme Corp",
      journey: "Pregnancy",
      subject: "Finance",
      engagement: "Low",
      videos: 62,
      avgWatch: "6.3m",
      lastActive: "18-08-2025",
      signup: "01-08-2025",
    },
    {
      name: "Aisha Khan",
      email: "aisha.khan@example.com",
      company: "Acme Corp",
      journey: "Pregnancy",
      subject: "Mental Health",
      engagement: "High",
      videos: 62,
      avgWatch: "2.6m",
      lastActive: "18-08-2025",
      signup: "01-08-2025",
    },
    {
      name: "Aisha Khan",
      email: "aisha.khan@example.com",
      company: "Acme Corp",
      journey: "Pregnancy",
      subject: "Career",
      engagement: "Medium",
      videos: 62,
      avgWatch: "2.8m",
      lastActive: "18-08-2025",
      signup: "01-08-2025",
    },
    {
      name: "Aisha Khan",
      email: "aisha.khan@example.com",
      company: "Acme Corp",
      journey: "Pregnancy",
      subject: "Mental Health",
      engagement: "Low",
      videos: 62,
      avgWatch: "6.2m",
      lastActive: "18-08-2025",
      signup: "01-08-2025",
    },
    {
      name: "Aisha Khan",
      email: "aisha.khan@example.com",
      company: "Acme Corp",
      journey: "Pregnancy",
      subject: "Career",
      engagement: "High",
      videos: 62,
      avgWatch: "9.1m",
      lastActive: "18-08-2025",
      signup: "01-08-2025",
    },
    {
      name: "Aisha Khan",
      email: "aisha.khan@example.com",
      company: "Acme Corp",
      journey: "Pregnancy",
      subject: "Health",
      engagement: "Medium",
      videos: 62,
      avgWatch: "3.6m",
      lastActive: "18-08-2025",
      signup: "01-08-2025",
    },
    {
      name: "Aisha Khan",
      email: "aisha.khan@example.com",
      company: "Acme Corp",
      journey: "Pregnancy",
      subject: "Finance",
      engagement: "Low",
      videos: 62,
      avgWatch: "6.3m",
      lastActive: "18-08-2025",
      signup: "01-08-2025",
    },
    {
      name: "Aisha Khan",
      email: "aisha.khan@example.com",
      company: "Acme Corp",
      journey: "Pregnancy",
      subject: "Mental Health",
      engagement: "High",
      videos: 62,
      avgWatch: "2.6m",
      lastActive: "18-08-2025",
      signup: "01-08-2025",
    },
    {
      name: "Aisha Khan",
      email: "aisha.khan@example.com",
      company: "Acme Corp",
      journey: "Pregnancy",
      subject: "Career",
      engagement: "Medium",
      videos: 62,
      avgWatch: "2.8m",
      lastActive: "18-08-2025",
      signup: "01-08-2025",
    },

  ]);

  return (
    <div className={usersStyles.dashboardContainer}>
      {/* Sidebar */}
      <div className={usersStyles.sidebarContainer}>
        <Sidebar />
      </div>

      {/* Main Content */}
      

        {/* Page Content */}
        <div className={usersStyles.contentArea}>
          <div className={usersStyles.mainContent}>
        {/* Topbar */}
        <Topbar />
          {/* Header Section */}
          <div className={usersStyles.headerSection}>
            <h1 className={usersStyles.pageTitle}>User Analytics</h1>
            <p className={usersStyles.pageSubtitle}>
              Monitor and analyze user engagement metrics
            </p>
          </div>

          {/* Stat Cards */}
          <div className={usersStyles.statCardsContainer}>
            <StatCard title="Total Users" value={users.length} color="blue" />
            <StatCard title="Active Users" value={2} color="green" />
            <StatCard title="Videos Watched" value={127} color="purple" />
            <StatCard title="Avg. Watch Time" value="6.1m" color="orange" />
          </div>

          {/* Filters Card */}
          <div className={usersStyles.filterCard}>
            <Filters />
          </div>

          {/* Users Table */}
          <div className={usersStyles.tableContainer}>
            <div className={usersStyles.tableHeader}>
              <h3 className={usersStyles.tableTitle}>Users Activity</h3>
              <div className={usersStyles.tableActions}>
              
              </div>
            </div>

            <div className={usersStyles.tableWrapper}>
              <table className={usersStyles.usersTable}>
                <thead>
                  <tr>
                    <th className={usersStyles.tableHeaderCell}>Name</th>
                    <th className={usersStyles.tableHeaderCell}>Email</th>
                    <th className={usersStyles.tableHeaderCell}>Company</th>
                    <th className={usersStyles.tableHeaderCell}>Journey</th>
                    <th className={usersStyles.tableHeaderCell}>Subject</th>
                    <th className={usersStyles.tableHeaderCell}>Engagement</th>
                    <th className={usersStyles.tableHeaderCell}>Videos</th>
                    <th className={usersStyles.tableHeaderCell}>Avg. Watch</th>
                    <th className={usersStyles.tableHeaderCell}>Last Active</th>
                    <th className={usersStyles.tableHeaderCell}>Signup</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, idx) => (
                    <tr key={idx} className={usersStyles.tableRow}>
                      <td className={usersStyles.tableCell}>
                        <div className={usersStyles.userInfo}>
                          <div className={usersStyles.avatar}>{u.name.charAt(0)}</div>
                          <span className={usersStyles.userName}>{u.name}</span>
                        </div>
                      </td>
                      <td className={usersStyles.tableCell}>
                        <a
                          href={`mailto:${u.email}`}
                          className={usersStyles.emailLink}
                        >
                          {u.email}
                        </a>
                      </td>
                      <td className={usersStyles.tableCell}>{u.company}</td>
                      <td className={usersStyles.tableCell}>
                        <span className={usersStyles.journeyBadge}>{u.journey}</span>
                      </td>
                      <td className={usersStyles.tableCell}>{u.subject}</td>
                      <td className={usersStyles.tableCell}>
                        <span
                          className={`${usersStyles.engagementBadge} ${
                            u.engagement === "High"
                              ? usersStyles.highEngagement
                              : u.engagement === "Medium"
                              ? usersStyles.mediumEngagement
                              : usersStyles.lowEngagement
                          }`}
                        >
                          {u.engagement}
                        </span>
                      </td>
                      <td className={usersStyles.tableCell}>
                        <div className={usersStyles.videoCount}>
                          {u.videos} <span className={usersStyles.videoLabel}>videos</span>
                        </div>
                      </td>
                      <td className={usersStyles.tableCell}>{u.avgWatch}</td>
                      <td className={usersStyles.tableCell}>{u.lastActive}</td>
                      <td className={usersStyles.tableCell}>{u.signup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
