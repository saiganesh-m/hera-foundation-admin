import React, { useState } from "react";
import styles from "./Filters.module.css";

const Filters = () => {
  const [company, setCompany] = useState("All Companies");
  const [subject, setSubject] = useState("All Subjects");
  const [date, setDate] = useState("Last 30 Days");

  const companies = ["All Companies", "Company 1", "Company 2", "Company 3", "Company 4"];
  const subjects = ["All Subjects", "Health", "Career", "Mental Health", "Finance"];
  const dates = ["Last 7 days", "Last 30 Days", "Last 60 Days", "Last 90 Days", "Custom"];

  return (
    <div className={styles.filtersContainer}>
      {/* Company */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Company</label>
        <select
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={styles.filterSelect}
        >
          {companies.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Subject */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Subject</label>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={styles.filterSelect}
        >
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Date */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Date</label>
        <select
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={styles.filterSelect}
        >
          {dates.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        {date === "Custom" && (
          <input type="date" className={styles.filterInput} />
        )}
      </div>

      {/* Reset Button */}
      <button className={styles.resetButton}>Reset Filter</button>
    </div>
  );
};

export default Filters;