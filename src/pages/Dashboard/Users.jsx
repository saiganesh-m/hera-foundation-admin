import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Filters from "../../components/Filters";

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
      name: "Mohammed Ali",
      email: "mohammed.ali@example.com",
      company: "Stark Industries",
      journey: "Parenting",
      subject: "Finance",
      engagement: "Medium",
      videos: 45,
      avgWatch: "7.1m",
      lastActive: "17-08-2025",
      signup: "02-08-2025",
    },
    {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      company: "Wayne Enterprises",
      journey: "Newborn",
      subject: "Mental Health",
      engagement: "Low",
      videos: 28,
      avgWatch: "6.2m",
      lastActive: "16-08-2025",
      signup: "03-08-2025",
    },
    {
      name: "David Miller",
      email: "david.m@example.com",
      company: "Oscorp",
      journey: "Pregnancy",
      subject: "Career",
      engagement: "High",
      videos: 72,
      avgWatch: "9.1m",
      lastActive: "15-08-2025",
      signup: "04-08-2025",
    },
    {
      name: "Emma Wilson",
      email: "emma.w@example.com",
      company: "Umbrella Corp",
      journey: "Parenting",
      subject: "Health",
      engagement: "Medium",
      videos: 38,
      avgWatch: "3.6m",
      lastActive: "14-08-2025",
      signup: "05-08-2025",
    },
    {
      name: "James Brown",
      email: "james.b@example.com",
      company: "Cyberdyne",
      journey: "Newborn",
      subject: "Finance",
      engagement: "Low",
      videos: 22,
      avgWatch: "6.3m",
      lastActive: "13-08-2025",
      signup: "06-08-2025",
    },
    {
      name: "Lisa Taylor",
      email: "lisa.t@example.com",
      company: "Acme Corp",
      journey: "Pregnancy",
      subject: "Mental Health",
      engagement: "High",
      videos: 65,
      avgWatch: "2.6m",
      lastActive: "12-08-2025",
      signup: "07-08-2025",
    },
    {
      name: "Robert Garcia",
      email: "robert.g@example.com",
      company: "Stark Industries",
      journey: "Parenting",
      subject: "Career",
      engagement: "Medium",
      videos: 41,
      avgWatch: "2.8m",
      lastActive: "11-08-2025",
      signup: "08-08-2025",
    },
    {
      name: "Maria Lopez",
      email: "maria.l@example.com",
      company: "Wayne Enterprises",
      journey: "Newborn",
      subject: "Mental Health",
      engagement: "Low",
      videos: 19,
      avgWatch: "6.2m",
      lastActive: "10-08-2025",
      signup: "09-08-2025",
    },
    {
      name: "William Chen",
      email: "william.c@example.com",
      company: "Oscorp",
      journey: "Pregnancy",
      subject: "Career",
      engagement: "High",
      videos: 78,
      avgWatch: "9.1m",
      lastActive: "09-08-2025",
      signup: "10-08-2025",
    },
  ]);

  return (
    <div className={usersStyles.dashboardContainer}>
      {/* Sidebar */}
      <div className={usersStyles.sidebarContainer}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={usersStyles.contentArea}>
        {/* Topbar */}
        <Topbar />
        
        {/* Dashboard Content */}
        <div className={usersStyles.dashboardContent}>


          {/* Filters Container */}
          <div className={usersStyles.filterContainer}>
            <Filters />
          </div>

          {/* Users Table */}
          <div className={usersStyles.tableContainer}>
            <div className={usersStyles.tableHeader}>
              <h3 className={usersStyles.tableTitle}>Activity (Filtered Rows)</h3>
            </div>

            <div className={usersStyles.tableWrapper}>
              <table className={usersStyles.dataTable}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Journey</th>
                    <th>Subject</th>
                    <th>Engagement</th>
                    <th>Videos</th>
                    <th>Avg. Watch</th>
                    <th>Last Active</th>
                    <th>Signup</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td>
                    <div className={usersStyles.userInfo}>
                      <span>{user.name}</span>
                    </div>
                      </td>
                      <td>
                        <a href={`mailto:${user.email}`} className={usersStyles.emailLink}>
                          {user.email}
                        </a>
                      </td>
                      <td>{user.company}</td>
                      <td>
                        <span className={usersStyles.journeyBadge}>
                          {user.journey}
                        </span>
                      </td>
                      <td>{user.subject}</td>
                      <td>
                        <span className={`${usersStyles.engagementBadge} ${
                          user.engagement === "High" 
                            ? usersStyles.highEngagement 
                            : user.engagement === "Medium" 
                            ? usersStyles.mediumEngagement 
                            : usersStyles.lowEngagement
                        }`}>
                          {user.engagement}
                        </span>
                      </td>
                      <td>
                        <div className={usersStyles.videoCount}>
                          {user.videos} 
                        </div>
                      </td>
                      <td>{user.avgWatch}</td>
                      <td>{user.lastActive}</td>
                      <td>{user.signup}</td>
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