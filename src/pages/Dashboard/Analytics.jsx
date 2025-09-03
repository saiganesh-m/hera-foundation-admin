import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Filters from "../../components/Filters";
import StatCard from "../../components/StatCard";
import styles from "./Analytics.module.css";

const Analytics = () => {
  // Mock data
  const dailyActiveUsers = [
    { date: "01-08-2025", value: 1842 },
    { date: "06-08-2025", value: 1900 },
    { date: "11-08-2025", value: 1850 },
    { date: "16-08-2025", value: 2000 },
    { date: "21-08-2025", value: 1950 },
    { date: "26-08-2025", value: 2100 },
  ];

  const usersByJourney = [
    { name: "Pregnancy", value: 56 },
    { name: "Pre-Conception", value: 34 },
    { name: "Return To Work", value: 10 },
  ];

  const usersByCompany = [
    { company: "Hera Pilot Co.", users: 150 },
    { company: "Demo Ltd.", users: 90 },
    { company: "Acee Group", users: 120 },
    { company: "The Hera Foundation", users: 70 },
  ];

  const topParticipationBySubject = [
    { subject: "Health & Food", participation: 180 },
    { subject: "Understanding Your Cycle", participation: 160 },
    { subject: "Balancing Your Career", participation: 170 },
    { subject: "Financial Planning", participation: 140 },
    { subject: "Managing Your Emotions", participation: 120 },
    { subject: "Healthy Lifestyle", participation: 100 },
  ];

  // Colors
  const COLORS = ["#D4B7AD", "#E3CDC2", "#F7DCC8"];
  const CARD_COLORS = [
    "#4D9ECD",
    "#AB1A52",
    "#6A7FDB",
    "#38B2AC",
    "#9F7AEA",
    "#ED8936",
  ];

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.contentArea}>
        <Topbar />

        <div className={styles.dashboardContent}>
          {/* Filters Section */}
          <div className={styles.filterContainer}>
            <Filters />
          </div>

          {/* Stat Cards */}
          <div className={styles.statGrid}>
            <StatCard
              title="Daily Active Users"
              value="1842"
              subtitle="Last 28 days"
              color={CARD_COLORS[0]}
              trend={{ value: 5.2, isPositive: true }}
            />
            <StatCard
              title="Total Sessions"
              value="1842"
              subtitle="Last 28 days"
              color={CARD_COLORS[1]}
              trend={{ value: 3.7, isPositive: true }}
            />
            <StatCard
              title="Total Videos Watched"
              value="60"
              subtitle="All Journey | All Subjects"
              color={CARD_COLORS[2]}
              trend={{ value: 8.1, isPositive: true }}
            />
            <StatCard
              title="Total Watch Minutes"
              value="4763"
              subtitle="All Journey | All Subjects"
              color={CARD_COLORS[3]}
              trend={{ value: 12.4, isPositive: true }}
            />
            <StatCard
              title="Avg Session / User"
              value="1.21"
              subtitle="Last 25 days"
              color={CARD_COLORS[4]}
              trend={{ value: 2.3, isPositive: true }}
            />
            <StatCard
              title="Avg. Videos / User"
              value="1.98"
              subtitle="Last 28 days"
              color={CARD_COLORS[5]}
              trend={{ value: 1.5, isPositive: true }}
            />
            <StatCard
              title="Avg. Watch Minutes / User"
              value="13.5"
              subtitle="Last 28 days"
              color="#48BB78"
              trend={{ value: 4.2, isPositive: true }}
            />
          </div>

          {/* User Engagement & Users by Journey */}
          <div className={styles.twoOneGrid}>
            {/* Line Chart */}
            <div className={styles.chartCard}>
              <h3 className={styles.chartTitle}>User Engagement</h3>
              <p className={styles.chartSubtitle}>
                Content Consumption Over Time
              </p>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={dailyActiveUsers}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="date" stroke="#757575" fontSize={12} />
                  <YAxis stroke="#757575" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #e0e6ed",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#4D9ECD"
                    strokeWidth={2}
                    dot={{ r: 3, fill: "#4D9ECD" }}
                    activeDot={{ r: 5, fill: "#4D9ECD" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Donut Chart */}
            <div className={styles.chartCard}>
              <h3 className={styles.chartTitle}>Users by Journey</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={usersByJourney}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={50}
                    startAngle={90}
                    endAngle={450}
                    labelLine={false}
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  >
                    {usersByJourney.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name) => [`${value}%`, name]}
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #e0e6ed",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              {/* Custom Legend */}
              <div className={styles.pieLegend}>
                {usersByJourney.map((item, index) => (
                  <div key={index} className={styles.legendItem}>
                    <span
                      className={styles.legendColor}
                      style={{ backgroundColor: COLORS[index] }}
                    ></span>
                    <span className={styles.legendText}>
                      {item.name}: {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Users by Company & Top B Participation */}
          <div className={styles.twoOneGrid}>
            {/* Bar Chart - Users by Company */}
            <div className={styles.chartCard}>
              <h3 className={styles.chartTitle}>No. of Users by Company</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={usersByCompany}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="company" stroke="#757575" fontSize={12} />
                  <YAxis stroke="#757575" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #e0e6ed",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Bar
                    dataKey="users"
                    fill="#D4B7AD"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart - Participation by Subject */}
            <div className={styles.chartCard}>
              <h3 className={styles.chartTitle}>
                Top B Participation by Subject
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  data={topParticipationBySubject}
                  margin={{ bottom: 60 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis
                    dataKey="subject"
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    interval={0}
                    stroke="#757575"
                    fontSize={12}
                  />
                  <YAxis stroke="#757575" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #e0e6ed",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Bar
                    dataKey="participation"
                    fill="#4D9ECD"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Table */}
          <div className={styles.tableContainer}>
            <div className={styles.tableHeader}>
              <h3 className={styles.tableTitle}>Activity (Filtered Rows)</h3>
            </div>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Company</th>
                  <th>Journey</th>
                  <th>Subject</th>
                  <th>Session</th>
                  <th>Video</th>
                  <th>Watch Minute</th>
                  <th>User Active</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01-08-2025</td>
                  <td>Hera Pilot Co.</td>
                  <td>Pregnancy</td>
                  <td>Health</td>
                  <td>31</td>
                  <td>50</td>
                  <td>302</td>
                  <td>28</td>
                </tr>
                <tr>
                  <td>01-08-2025</td>
                  <td>Demo Ltd.</td>
                  <td>Pregnancy</td>
                  <td>Finance</td>
                  <td>32</td>
                  <td>62</td>
                  <td>410</td>
                  <td>26</td>
                </tr>
                <tr>
                  <td>01-08-2025</td>
                  <td>Acee Group</td>
                  <td>Pregnancy</td>
                  <td>Mental Health</td>
                  <td>32</td>
                  <td>62</td>
                  <td>410</td>
                  <td>26</td>
                </tr>
                <tr>
                  <td>04-08-2025</td>
                  <td>The Hera Foundation</td>
                  <td>Preconception</td>
                  <td>Health</td>
                  <td>32</td>
                  <td>62</td>
                  <td>410</td>
                  <td>26</td>
                </tr>
                <tr>
                  <td>05-08-2025</td>
                  <td>Hera Pilot Co.</td>
                  <td>Return to Work</td>
                  <td>Finance</td>
                  <td>32</td>
                  <td>62</td>
                  <td>410</td>
                  <td>26</td>
                </tr>
                <tr>
                  <td>08-08-2025</td>
                  <td>Demo Ltd.</td>
                  <td>Pregnancy</td>
                  <td>Mental Health</td>
                  <td>32</td>
                  <td>62</td>
                  <td>410</td>
                  <td>26</td>
                </tr>
                <tr>
                  <td>08-08-2025</td>
                  <td>Acee Group</td>
                  <td>Pregnancy</td>
                  <td>Mental Health</td>
                  <td>32</td>
                  <td>62</td>
                  <td>410</td>
                  <td>26</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
