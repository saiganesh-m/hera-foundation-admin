import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend
} from "recharts";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Filters from "../../components/Filters";
import StatCard from "../../components/StatCard";
import styles from "./DashboardOverview.module.css";

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
    { name: "Preconception", value: 45 },
    { name: "Pregnancy", value: 35 },
    { name: "ReturntoWork", value: 20 },
  ];

  const COLORS = ["#b4d7f6", "#83b5d5", "#4D9ecd"];

  const engagementData = [
    { name: "Planning & Pregnancy 101", hours: 300 },
    { name: "Folic Acid & Diet Basics", hours: 250 },
    { name: "Career Talk With HR Expert", hours: 180 },
    { name: "Breakfasts for Baby", hours: 200 },
    { name: "Managing Stress", hours: 150 },
  ];

  const recentSignupsData = [
    { name: "Alicia Khan", email: "alzha.khung@example.com", company: "Amin Cong", journey: "Pregnancy", signup: "Aug 21, 2024" },
    { name: "Rohan Diaz", email: "ruhan.diaz@example.com", company: "Hong PhiK Co.", journey: "Preconception", signup: "Aug 21, 2024" },
    { name: "Meech Jyer", email: "meech.jyer@example.com", company: "Dennis Ltd.", journey: "ReturntoWork", signup: "Aug 20, 2024" },
    { name: "Sanjay R.", email: "sanjayep@example.com", company: "Amin Dong", journey: "Pregnancy", signup: "Aug 18, 2024" },
    { name: "Nana R.", email: "nana.r@example.com", company: "Dennis Ltd.", journey: "Preconception", signup: "Aug 18, 2024" }
  ];

  const recentContentData = [
    { title: "Trimester-Tester What & What", journey: "Pregnancy", subject: "Health", status: "Published", views: "1800", avgWatch: "8.4m" },
    { title: "TTC Timeline:1 Experience vs Reality", journey: "Preconception", subject: "Health", status: "Published", views: "1410", avgWatch: "7.9m" },
    { title: "Salary & Leave: 1 Know Your Rights", journey: "Pregnancy", subject: "Career", status: "Education", views: "0", avgWatch: "-" },
    { title: "Investing as a Client (Parent) Going with TTC", journey: "ReturntoWork", subject: "Finance", status: "History", views: "0", avgWatch: "-" },
    { title: "Going with TTC", journey: "Preconception", subject: "Health", status: "Published", views: "960", avgWatch: "9.1m" }
  ];

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.contentArea}>
        <Topbar />
        
        <div className={styles.dashboardContent}>
          {/* Filters */}
          <div className={styles.filterContainer}>
            <Filters />
          </div>

          {/* Stat Cards */}
          <div className={styles.statGrid}>
            <StatCard title="Total Users" value="1842" subtitle="Last 30 days" />
            <StatCard title="Active Users" value="1842" subtitle="Last 30 days" />
            <StatCard title="Total Videos" value="60" subtitle="Library" />
            <StatCard title="Engagement Rate" value="60%" subtitle="Avg across content" />
            <StatCard title="Total Watch Time" value="1,204" subtitle="Hrs" />
            <StatCard title="New Signups" value="1842" subtitle="Last 30 Days" />
            <StatCard title="Avg. Session / User" value="2.3 M" subtitle="Last 30 Days" />
          </div>

          {/* Charts */}
          <div className={styles.twoOneGrid}>
            {/* User Growth */}
            <div className={styles.chartCard}>
              <h3 className={styles.chartTitle}>User Growth</h3>
              <p className={styles.chartSubtitle}>New vs. Active User</p>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="date" stroke="#636e72" />
                  <YAxis stroke="#636e72" />
                  <Tooltip />
                  <Line type="monotone" dataKey="active" stroke="#e91e63" strokeWidth={2} />
                  <Line type="monotone" dataKey="new" stroke="#2196f3" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Journey Split */}
            <div className={styles.chartCard}>
              <h3 className={styles.chartTitle}>Journey Split (Total Users)</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={journeySplitData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={40}   // ✅ donut style
                    outerRadius={80}
                    label={({ value }) => value}
                  >
                    {journeySplitData.map((entry, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle" // ✅ round bullet legend
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Engagement & Highlights */}
          <div className={styles.twoOneGrid}>
            <div className={styles.chartCard}>
              <h3 className={styles.chartTitle}>Top Performing Videos by Watch Hours</h3>
              <p className={styles.chartSubtitle}>Engagement Heatmap</p>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="name" stroke="#636e72" />
                  <YAxis stroke="#636e72" />
                  <Tooltip />
                  <Bar dataKey="hours" fill="#D4B7AD" radius={[20, 20, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className={styles.performanceCard}>
              <h3 className={styles.chartTitle}>Highlights</h3>
              <p className={styles.metricValue}>9.7m</p>
              <p className={styles.metricLabel}>Avg. minutes watched / user</p>
              <h4 className={styles.subMetricTitle}>Colgate</h4>
              <p className={styles.subMetricValue}>Most active company</p>
              <h4 className={styles.subMetricTitle}>Preconception</h4>
              <p className={styles.subMetricValue}>Most popular journey</p>
            </div>
          </div>

          {/* Tables */}
          <div className={styles.twoColumnGrid}>
            {/* Recent Signups */}
            <div className={styles.dataCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Recent User Signups</h3>
                <button className={styles.viewAllButton}>View All</button>
              </div>
              <div className={styles.tableContainer}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr><th>Name</th><th>Email</th><th>Company</th><th>Journey</th><th>Signup</th></tr>
                  </thead>
                  <tbody>
                    {recentSignupsData.map((u, i) => (
                      <tr key={i}>
                        <td className={styles.nameCell}>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.company}</td>
                        <td>
                          <span className={`${styles.journeyTag} ${styles[u.journey]}`}>
                            {u.journey}
                          </span>
                        </td>
                        <td>{u.signup}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Content */}
            <div className={styles.dataCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Recently Added Content</h3>
              </div>
              <div className={styles.tableContainer}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr><th>Title</th><th>Journey</th><th>Subject</th><th>Status</th><th>Views</th><th>Avg. Watch</th></tr>
                  </thead>
                  <tbody>
                    {recentContentData.map((c, i) => (
                      <tr key={i}>
                        <td className={styles.titleCell}>{c.title}</td>
                        <td>
                          <span className={`${styles.journeyTag} ${styles[c.journey]}`}>
                            {c.journey}
                          </span>
                        </td>
                        <td>{c.subject}</td>
                        <td>
                          <span className={`${styles.statusBadge} ${styles[c.status.toLowerCase()]}`}>
                            {c.status}
                          </span>
                        </td>
                        <td>{c.views}</td>
                        <td>{c.avgWatch}</td>
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
