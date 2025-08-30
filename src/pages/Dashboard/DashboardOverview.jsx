import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend
} from "recharts";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Filters from "../../components/Filters";
import StatCard from "../../components/StatCard";
import styles from "../../components/Sidebar.module.css";
import dashboardStyles from "./DashboardOverview.module.css";

const DashboardOverview = () => {
  const [exportFormat, setExportFormat] = useState("csv");
  
  // Mock Data
  const userGrowthData = [
    { date: "Aug 1", new: 50, active: 200 },
    { date: "Aug 5", new: 80, active: 220 },
    { date: "Aug 10", new: 60, active: 210 },
    { date: "Aug 15", new: 70, active: 230 },
    { date: "Aug 20", new: 90, active: 240 },
    { date: "Aug 25", new: 100, active: 260 },
    { date: "Aug 30", new: 120, active: 280 },
  ];

  const journeySplitData = [
    { name: "Pre-Conception", value: 45 },
    { name: "Pregnancy", value: 35 },
    { name: "Return To Work", value: 20 },
  ];
  const COLORS = ["#b4d7f6", "#83b5d5", "#4D9ecd"];

  const engagementData = [
    { name: "Planning & Pregnancy 101", hours: 300 },
    { name: "Folic Acid & Diet Basics", hours: 250 },
    { name: "Career Talk With HR Expert", hours: 180 },
    { name: "Breakfasts for Baby", hours: 200 },
    { name: "Managing Stress", hours: 150 },
  ];

  // Recent User Signups Data
  const recentSignupsData = [
    { name: "Alicia Khan", email: "alzha.khung@example.com", company: "Amin Cong", journey: "Pregnancy", signup: "Aug 21, 2024" },
    { name: "Rohan Diaz", email: "ruhan.diaz@example.com", company: "Hong PhiK Co.", journey: "Preconception", signup: "Aug 21, 2024" },
    { name: "Meech Jyer", email: "meech.jyer@example.com", company: "Dennis Ltd.", journey: "Return to Work", signup: "Aug 20, 2024" },
    { name: "Sanjay R.", email: "sanjayep@example.com", company: "Amin Dong", journey: "Pregnancy", signup: "Aug 18, 2024" },
    { name: "Nana R.", email: "nana.r@example.com", company: "Dennis Ltd.", journey: "Preconception", signup: "Aug 18, 2024" }
  ];

  // Recently Added Content Data
  const recentContentData = [
    { title: "Trimester-Tester What & What", journey: "Pregnancy", subject: "Health", status: "Published", views: "1800", avgWatch: "8.4m" },
    { title: "TTC Timeline:1 Experience vs Reality", journey: "Preconception", subject: "Health", status: "Published", views: "1410", avgWatch: "7.9m" },
    { title: "Salary & Leave: 1 Know Your Rights", journey: "Pregnancy", subject: "Career", status: "Education", views: "0", avgWatch: "-" },
    { title: "Investing as a Client (Parent) Going with TTC", journey: "Return to Work", subject: "Finance", status: "History", views: "0", avgWatch: "-" },
    { title: "Going with TTC", journey: "Preconception", subject: "Health", status: "Published", views: "960", avgWatch: "9.1m" }
  ];

  // Handle export functionality
  const handleExport = () => {
    // In a real app, this would generate and download the file
    alert(`Exporting data as ${exportFormat.toUpperCase()}`);
  };

  return (
    <div className={dashboardStyles.dashboardContainer}>
      <Sidebar />
      <div className={`${styles.contentArea} ${dashboardStyles.contentArea}`}>
        <div className={styles.topbarContainer}>
          <Topbar />
        </div>
        <div className={dashboardStyles.dashboardContent}>
          {/* Header with Export Button */}
          <div className={dashboardStyles.headerWithExport}>
            <div>
              <h1 className={dashboardStyles.pageTitle}>Dashboard Overview</h1>
              <p className={dashboardStyles.pageSubtitle}>
                Track and analyze user activity and engagement metrics
              </p>
            </div>
            
            {/* Export Button on the Right */}
   
          </div>

          {/* Filters Section */}
          <div className={dashboardStyles.filterContainer}>
            <Filters />
          </div>

          {/* Stat Cards Section */}
          <div className={dashboardStyles.statGrid}>
            <StatCard title="Total Users" value="1842" subtitle="Last 30 days" />
            <StatCard title="Active Users" value="1842" subtitle="Last 30 days" />
            <StatCard title="Total Videos" value="60" subtitle="Library" />
            <StatCard title="Engagement Rate" value="60%" subtitle="Average across content" />
            <StatCard title="Total Watch Time" value="1,204" subtitle="Hrs" />
          </div>

          {/* New Signups and Avg. Session */}
          <div className={dashboardStyles.twoColumnGrid}>
            <StatCard title="New Signups" value="1842" subtitle="Last 30 Days" />
            <StatCard title="Avg. Session / User" value="2.3 M" subtitle="Last 30 Days" />
          </div>

          {/* User Growth Chart and Journey Split */}
          <div className={dashboardStyles.twoOneGrid}>
            <div className={dashboardStyles.chartCard}>
              <h3 className={dashboardStyles.chartTitle}>User Growth</h3>
              <p className={dashboardStyles.chartSubtitle}>New vs. Active User</p>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="date" stroke="#636e72" />
                  <YAxis stroke="#636e72" />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: '1px solid #e0e6ed',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="active" 
                    stroke="#e91e63" 
                    strokeWidth={2} 
                    dot={{ r: 4 }} 
                    activeDot={{ r: 6 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="new" 
                    stroke="#2196f3" 
                    strokeWidth={2} 
                    dot={{ r: 4 }} 
                    activeDot={{ r: 6 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className={dashboardStyles.chartCard}>
              <h3 className={dashboardStyles.chartTitle}>Journey Split (Total Users)</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie 
                    data={journeySplitData} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={80} 
                    label
                    labelLine={false}
                  >
                    {journeySplitData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend 
                    layout="vertical" 
                    verticalAlign="middle" 
                    align="right"
                    wrapperStyle={{ paddingLeft: '20px' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: '1px solid #e0e6ed',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Engagement Heatmap and Top Performing */}
          <div className={dashboardStyles.twoOneGrid}>
            <div className={dashboardStyles.chartCard}>
              <h3 className={dashboardStyles.chartTitle}>Top Performing Videos by Watch Hours</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="name" stroke="#636e72" />
                  <YAxis stroke="#636e72" />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: '1px solid #e0e6ed',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }} 
                  />
                  <Bar dataKey="hours" fill="#D4B7AD" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className={dashboardStyles.performanceCard}>
              <h3 className={dashboardStyles.chartTitle}>Top Performing</h3>
              <p className={dashboardStyles.metricValue}>9.7m</p>
              <p className={dashboardStyles.metricLabel}>Avg. minutes watched per user</p>
              <h4 className={dashboardStyles.subMetricTitle}>Colgate</h4>
              <p className={dashboardStyles.subMetricValue}>Most active company</p>
              <h4 className={dashboardStyles.subMetricTitle}>Pre-Conception</h4>
              <p className={dashboardStyles.subMetricValue}>Most popular journey</p>
            </div>
          </div>

          {/* Recent User Signups and Recently Added Content */}
          <div className={dashboardStyles.twoColumnGrid}>
            {/* Recent User Signups Card */}
            <div className={dashboardStyles.dataCard}>
              <div className={dashboardStyles.cardHeader}>
                <h3 className={dashboardStyles.cardTitle}>Recent User Signups</h3>
                <button className={dashboardStyles.viewAllButton}>View All</button>
              </div>
              <div className={dashboardStyles.tableContainer}>
                <table className={dashboardStyles.dataTable}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th>Journey</th>
                      <th>Signup</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentSignupsData.map((user, index) => (
                      <tr key={index}>
                        <td className={dashboardStyles.nameCell}>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.company}</td>
                        <td>
                          <span className={`${dashboardStyles.journeyTag} ${dashboardStyles[user.journey.replace(/\s+/g, '')]}`}>
                            {user.journey}
                          </span>
                        </td>
                        <td>{user.signup}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recently Added Content Card */}
            <div className={dashboardStyles.dataCard}>
              <div className={dashboardStyles.cardHeader}>
                <h3 className={dashboardStyles.cardTitle}>Recently Added Content</h3>
                <div>
                  <h2 className="fs-6">Manage Content</h2>
                </div>
              </div>
              <div className={dashboardStyles.tableContainer}>
                <table className={dashboardStyles.dataTable}>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Journey</th>
                      <th>Subject</th>
                      <th>Status</th>
                      <th>Views</th>
                      <th>Avg. Watch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentContentData.map((content, index) => (
                      <tr key={index}>
                        <td className={dashboardStyles.titleCell}>{content.title}</td>
                        <td>
                          <span className={`${dashboardStyles.journeyTag} ${dashboardStyles[content.journey.replace(/\s+/g, '')]}`}>
                            {content.journey}
                          </span>
                        </td>
                        <td>{content.subject}</td>
                        <td>
                          <span className={`${dashboardStyles.statusBadge} ${dashboardStyles[content.status.toLowerCase()]}`}>
                            {content.status}
                          </span>
                        </td>
                        <td>{content.views}</td>
                        <td>{content.avgWatch}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;