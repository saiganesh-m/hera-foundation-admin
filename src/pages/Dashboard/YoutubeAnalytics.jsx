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
    { name: "Managing Stress (TTC)", value: 700 },
    { name: "Budgeting for Baby", value: 850 },
    { name: "Career Talk with HR Expert", value: 1000 },
    { name: "Folic Acid & Diet Basics", value: 1200 },
    { name: "Planning a Pregnancy 101", value: 1400 },
  ];

  const topPerforming = [
    { name: "Planning a Pregnancy 101", value: 2200 },
    { name: "Folic Acid & Diet Basics", value: 2000 },
    { name: "Career Talk with HR Expert", value: 1800 },
    { name: "Budgeting for Baby", value: 1600 },
    { name: "Managing Stress (TTC)", value: 1500 },
  ];

  const videoTable = [
    {
      id: 1,
      thumbnail: "https://img.youtube.com/vi/-ctgFTZsJXs/hqdefault.jpg",
      title: "Negotiating Work Policies & Benefits While Being Pregnant By ...",
      journey: "Return To Work",
      subject: "Health",
      type: "Video",
      views: 1116,
      watchTime: 744,
      avgDuration: "4m",
      retention: "45%",
    },
    {
      id: 2,
      thumbnail: "https://img.youtube.com/vi/0Dc55Ty7Zl8/hqdefault.jpg",
      title: "Negotiating Work Policies & Benefits While Being Pregnant By ...",
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
      thumbnail: "https://img.youtube.com/vi/g0_eoSWNLMo/hqdefault.jpg",
      title: "Negotiating Work Policies & Benefits While Being Pregnant By ...",
      journey: "Pregnancy",
      subject: "Career",
      type: "Podcast",
      views: 980,
      watchTime: 820,
      avgDuration: "8m",
      retention: "55%",
    },
    {
      id: 4,
      thumbnail: "https://img.youtube.com/vi/XQ7iey1Al_M/hqdefault.jpg",
      title: "Negotiating Work Policies & Benefits While Being Pregnant By ...",
      journey: "Pre-Conception",
      subject: "Finance",
      type: "Webinar",
      views: 2100,
      watchTime: 1800,
      avgDuration: "10m",
      retention: "60%",
    },
  ];

  // Convert minutes to hours for display
  const formatWatchTime = (minutes) => {
    return (minutes / 60).toFixed(1);
  };

  // Axis text style
  const axisTickStyle = {
    fill: "#757575",
    fontSize: 12,
    fontWeight: 600,
    lineHeight: "131%",
    textAnchor: "end",
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
          {/* Page Header */}
          <div className={styles.pageHeader}>
            <div className={styles.headerText}>
              <h2 className={styles.pageTitle}>Youtube Analytics</h2>
              <p className={styles.pageSubtitle}>
                All data and statistics drawn from YouTube studio and platform
              </p>
            </div>
        <button
            className={styles.openStudioBtn}
            onClick={() =>
              window.open(
                "https://studio.youtube.com/channel/UCUcesT4tDm2iSkEu7HylWuw",
                "_blank"
              )
            }
          >
            Open YouTube Studio <span className={styles.arrow}>↗</span>
          </button>


          </div>

          {/* Filters */}
          <div className={styles.filtersWrapper}>
            <div className={styles.filtersContainer}>
            <Filters
            youtubeAnalytics={true}
                filters={["journey", "subject", "contentType", "date"]}
              />


            </div>
          </div>

          {/* Stat Cards + Journey Split */}
          <div className={styles.statsRow}>
            {/* 5 Stat Cards */}
            <div className={styles.fiveStatsRow}>
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

            {/* Journey Split */}
            <div className={styles.journeyChart}>
              <h4>Journey Split</h4>
              <div className={styles.chartContainer}>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={journeyData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                      label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
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
              <h5>Least 5</h5>
              <h4>Least Performing Videos (Watch Time)</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={leastPerforming} margin={{ bottom: 110 }}>
                  <XAxis
                    dataKey="name"
                    interval={0}
                    angle={-30}
                    textAnchor="end"
                    tick={axisTickStyle}
                  />
                  <YAxis tick={axisTickStyle} />
                  <Bar dataKey="value" fill="#D4B7AD" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className={styles.chartCard}>
              <h5>Top 5</h5>
              <h4>Top Performing Videos (Watch Time)</h4>
              <ResponsiveContainer width="100%" height={330}>
                <BarChart data={topPerforming} margin={{ bottom: 110 }}>
                  <XAxis
                    dataKey="name"
                    interval={0}
                    angle={-30}
                    textAnchor="end"
                    tick={axisTickStyle}
                  />
                  <YAxis tick={axisTickStyle} />
                  <Bar dataKey="value" fill="#4D9ECD" radius={[10, 10, 0, 0]} />
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
                    <td>
                        <span className={styles.videoTitle}>{video.title}</span>
                      </td>

                   <td>
                  <span
                    className={`${styles.journeyTag} ${
                      video.journey.includes("Pre-Conception")
                        ? styles.Preconception
                        : video.journey.includes("Pregnancy")
                        ? styles.Pregnancy
                        : video.journey.includes("Return To Work")
                        ? styles.ReturntoWork
                        : ""
                    }`}
                  >
                    {video.journey}
                  </span>
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
