import React from "react";
import Sidebar from "../../components/Sidebar";
import Filters from "../../components/Filters";
import StatCard from "../../components/StatCard";
import styles from "./YoutubeAnalytics.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const YoutubeAnalytics = () => {
  const journeyData = [
    { name: "Pre-Conception Journey", value: 2290 },
    { name: "Pregnancy Journey", value: 3310 },
    { name: "Return To Work Journey", value: 880 },
  ];
  const COLORS = ["#f9c9b6", "#e7b5a2", "#c59d91"];

  const leastPerforming = [
    { name: "Video A", value: 700 },
    { name: "Video B", value: 850 },
    { name: "Video C", value: 1000 },
    { name: "Video D", value: 1200 },
    { name: "Video E", value: 1400 },
  ];

  const topPerforming = [
    { name: "Video 1", value: 2200 },
    { name: "Video 2", value: 2000 },
    { name: "Video 3", value: 1800 },
    { name: "Video 4", value: 1600 },
    { name: "Video 5", value: 1500 },
  ];

  const videoTable = [
    {
      id: 1,
      thumbnail: "https://via.placeholder.com/80x60",
      title: "Negotiating While Pregnant At Work",
      journey: "Return To Work",
      subject: "Mental Health",
      type: "Video",
      views: 1116,
      watchTime: 744,
      avgDuration: "4m",
      retention: "45%",
    },
    {
      id: 2,
      thumbnail: "https://via.placeholder.com/80x60",
      title: "How to Talk to HR",
      journey: "Return To Work",
      subject: "Mental Health",
      type: "Video",
      views: 1533,
      watchTime: 1027,
      avgDuration: "6m",
      retention: "48%",
    },
    {
      id: 3,
      thumbnail: "https://via.placeholder.com/80x60",
      title: "Balancing Career and Family",
      journey: "Pregnancy Journey",
      subject: "Work-Life Balance",
      type: "Podcast",
      views: 980,
      watchTime: 820,
      avgDuration: "8m",
      retention: "55%",
    },
    {
      id: 4,
      thumbnail: "https://via.placeholder.com/80x60",
      title: "Financial Planning for New Parents",
      journey: "Pre-Conception Journey",
      subject: "Finance",
      type: "Webinar",
      views: 2100,
      watchTime: 1800,
      avgDuration: "10m",
      retention: "60%",
    },
  ];

  return (
    <div className={styles.analyticsContainer}>
      {/* Sidebar */}
      <div className={styles.sidebarSection}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {/* Page Header */}
          <div className={styles.pageHeader}>
            <h1>YouTube Analytics</h1>
            <button className={styles.openStudioBtn}>Open YouTube Studio</button>
          </div>

          {/* Filters */}
          <div className={styles.filtersWrapper}>
            <div className={styles.filtersContainer}>
              <Filters />
            </div>
          </div>

          {/* Stat Cards + Journey Split */}
          <div className={styles.statsRow}>
            <div className={styles.statsGrid}>
              {/* Row 1 (3 cards) */}
              <div className={styles.statsRowLine}>
                <StatCard title="Total Views" value="17,300" subtitle="Last 25 Days" />
                <StatCard title="Unique Viewers" value="12,370" subtitle="Unique Users" />
                <StatCard title="Total Watch Time" value="6,480 hrs" subtitle="All Journeys | All Subjects" />
              </div>
              {/* Row 2 (2 cards) */}
              <div className={styles.statsRowLine}>
                <StatCard title="Avg. Duration" value="7.2m" subtitle="Last 25 Days" />
                <StatCard title="Avg. Retention" value="48.5%" subtitle="Last 25 Days" />
              </div>
            </div>

            {/* Journey Split */}
            <div className={styles.journeyChart}>
              <h4>Journey Split</h4>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={journeyData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                  >
                    {journeyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className={styles.legend}>
                {journeyData.map((item, idx) => (
                  <span key={idx}>
                    <span
                      className={styles.legendDot}
                      style={{ background: COLORS[idx] }}
                    ></span>
                    {item.name} ({item.value})
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Charts */}
          <div className={styles.chartsRow}>
            <div className={styles.chartCard}>
              <h4>Least Performing Videos (Watch Time)</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={leastPerforming} margin={{ bottom: 30 }}>
                  <XAxis dataKey="name" interval={0} angle={-30} textAnchor="end" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#c59d91" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className={styles.chartCard}>
              <h4>Top Performing Videos (Watch Time)</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={topPerforming} margin={{ bottom: 30 }}>
                  <XAxis dataKey="name" interval={0} angle={-30} textAnchor="end" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#60a5fa" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Video Performance Table */}
          <div className={styles.tableWrapper}>
            <h4>Video Performance Table</h4>
            <table className={styles.performanceTable}>
              <thead>
                <tr>
                  <th>Thumbnail</th>
                  <th>Title</th>
                  <th>Journey</th>
                  <th>Subject</th>
                  <th>Type</th>
                  <th>Views</th>
                  <th>Watch Time (hrs)</th>
                  <th>Avg. Duration</th>
                  <th>Retention</th>
                </tr>
              </thead>
              <tbody>
                {videoTable.map((video) => (
                  <tr key={video.id}>
                    <td>
                      <img src={video.thumbnail} alt="thumb" className={styles.thumb} />
                    </td>
                    <td>{video.title}</td>
                    <td>{video.journey}</td>
                    <td>{video.subject}</td>
                    <td>{video.type}</td>
                    <td>{video.views.toLocaleString()}</td>
                    <td>{(video.watchTime / 60).toFixed(1)}</td>
                    <td>{video.avgDuration}</td>
                    <td>{video.retention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeAnalytics;
