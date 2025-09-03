// YoutubeAnalytics.js
import React from "react";
import Sidebar from "../../components/Sidebar";
import Filters from "../../components/Filters";
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

  const COLORS = ["#F7DCC8", "#D4B7AD", "#E3CDC2"];

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
      watchTime: 744, // in minutes
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
      watchTime: 1027, // in minutes
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
      watchTime: 820, // in minutes
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
      watchTime: 1800, // in minutes
      avgDuration: "10m",
      retention: "60%",
    },
  ];

  // Convert minutes to hours for display
  const formatWatchTime = (minutes) => {
    return (minutes / 60).toFixed(1);
  };

  return (
    <div className={styles.analyticsContainer}>
      {/* Sidebar */}
      <div className={styles.sidebarSection}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {/* Page Header - Fixed duplicate structure */}
          <div className={styles.pageHeader}>
            <div className={styles.headerText}>
              <h2 className={styles.pageTitle}>Youtube Analytics</h2>
              <p className={styles.pageSubtitle}>
               All data and statistics drawn from YouTube studio and platform
              </p>
            </div>
            <button className={styles.openStudioBtn}>
              Open YouTube Studio
            </button>
          </div>

          {/* Filters */}
          <div className={styles.filtersWrapper}>
            <div className={styles.filtersContainer}>
              <Filters />
            </div>
          </div>

          {/* Stat Cards + Journey Split */}
          <div className={styles.statsRow}>
            {/* All 5 Stat Cards in One Row - matching screenshot layout */}
            <div className={styles.fiveStatsRow}>
              {/* First Row (3 cards) */}
              <div className={styles.firstRow}>
                <div className={styles.statCard}>
                  <div className={styles.statTitle}>Total Views</div>
                  <div className={styles.statValue}>17,300</div>
                  <div className={styles.statSubtitle}>Last 25 Days</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statTitle}>Unique Viewers</div>
                  <div className={styles.statValue}>12,370</div>
                  <div className={styles.statSubtitle}>Unique Users</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statTitle}>Total Watch Time</div>
                  <div className={styles.statValue}>6,480 hrs</div>
                  <div className={styles.statSubtitle}>
                    All Journeys | All Subjects
                  </div>
                </div>
              </div>

              {/* Second Row (2 cards) */}
              <div className={styles.secondRow}>
                <div className={styles.statCard}>
                  <div className={styles.statTitle}>Avg. Duration</div>
                  <div className={styles.statValue}>7.2m</div>
                  <div className={styles.statSubtitle}>Last 25 Days</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statTitle}>Avg. Retention</div>
                  <div className={styles.statValue}>48.5%</div>
                  <div className={styles.statSubtitle}>Last 25 Days</div>
                </div>
              </div>
            </div>

            {/* Journey Split - Compact Version */}
            <div className={styles.journeyChart}>
              <h4>Journey Split</h4>
              <div className={styles.chartContainer}>
                <ResponsiveContainer width="100%" height={180}>
                  <PieChart>
                    <Pie
                      data={journeyData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {journeyData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} users`, ""]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className={styles.legend}>
                {journeyData.map((item, idx) => (
                  <div key={`legend-${idx}`} className={styles.legendItem}>
                    <span
                      className={styles.legendDot}
                      style={{ background: COLORS[idx] }}
                    ></span>
                    <span className={styles.legendText}>
                      {item.name} ({item.value})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Charts */}
          <div className={styles.chartsRow}>
            <div className={styles.chartCard}>
              <h4>Least Performing Videos (Watch Time)</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  data={leastPerforming}
                  margin={{ bottom: 30 }}
                >
                  <XAxis
                    dataKey="name"
                    interval={0}
                    angle={-30}
                    textAnchor="end"
                  />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    fill="#D4B7AD"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className={styles.chartCard}>
              <h4>Top Performing Videos (Watch Time)</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  data={topPerforming}
                  margin={{ bottom: 30 }}
                >
                  <XAxis
                    dataKey="name"
                    interval={0}
                    angle={-30}
                    textAnchor="end"
                  />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    fill="#4D9ECD"
                    radius={[4, 4, 0, 0]}
                  />
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
                      <img
                        src={video.thumbnail}
                        alt="thumb"
                        className={styles.thumb}
                      />
                    </td>
                    <td>{video.title}</td>
                    <td>
                      <span className={styles.journeyTag}>{video.journey}</span>
                    </td>
                    <td>{video.subject}</td>
                    <td>
                      <span className={styles.typeBadge}>{video.type}</span>
                    </td>
                    <td className={styles.boldText}>
                      {video.views.toLocaleString()}
                    </td>
                    <td className={styles.boldText}>
                      {formatWatchTime(video.watchTime)}
                    </td>
                    <td>{video.avgDuration}</td>
                    <td>
                      <span className={styles.retentionPill}>
                        {video.retention}
                      </span>
                    </td>
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