import React, { useState } from "react";
import styles from "./Filters.module.css";

const Filters = ({ youtubeAnalytics = false, filters }) => {
  const [company, setCompany] = useState("All Companies");
  const [subject, setSubject] = useState("All Subjects");
  const [journey, setJourney] = useState("All Journeys");
  const [bucket, setBucket] = useState("All Buckets");
  const [status, setStatus] = useState("All Statuses");
  const [date, setDate] = useState("Last 30 Days");
  const [contentType, setContentType] = useState("All Content Types");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [search, setSearch] = useState("");

  const companies = ["All Companies", "Company 1", "Company 2", "Company 3", "Company 4"];
  const journeys = ["All Journeys", "Preconception", "Pregnancy", "Return to Work"];
  const subjects = ["All Subjects", "Health", "Career", "Mental Health", "Finance"];
  const buckets = ["All Buckets", "Deep Dive", "Quick Bite", "Other"];
  const statuses = ["All Statuses", "Live", "Scheduled", "Hidden"];
  const dates = ["Last 7 days", "Last 30 Days", "Last 60 Days", "Last 90 Days", "Custom"];
  const contentTypes = ["All", "Quick Bite", "Deep Dive"];

  const showFilter = (name) => !filters || filters.includes(name);

  // Count how many filters are visible (excluding the heading)
  const visibleFilters = [
    showFilter("company"),
    showFilter("journey"),
    showFilter("subject"),
    showFilter("bucket"),
    showFilter("status"),
    showFilter("date"),
    youtubeAnalytics && showFilter("contentType"),
    showFilter("startDate"),
    showFilter("endDate"),
    showFilter("search")
  ].filter(Boolean).length;

  return (
    <div className={styles.filtersContainer}>
      <h2 className={styles.filtersHeading}>Filters</h2> {/* Added Heading */}
      <div
        className={styles.filtersGrid} // New div for the grid of filters
        style={{ gridTemplateColumns: `repeat(${visibleFilters > 0 ? visibleFilters : 1}, 1fr)` }}
      >
        {showFilter("company") && (
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Company</label>
            <select value={company} onChange={(e) => setCompany(e.target.value)} className={styles.filterSelect}>
              {companies.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        )}

        {showFilter("journey") && (
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Journey</label>
            <select value={journey} onChange={(e) => setJourney(e.target.value)} className={styles.filterSelect}>
              {journeys.map((j) => <option key={j} value={j}>{j}</option>)}
            </select>
          </div>
        )}

        {showFilter("subject") && (
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Subject</label>
            <select value={subject} onChange={(e) => setSubject(e.target.value)} className={styles.filterSelect}>
              {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        )}

        {showFilter("bucket") && (
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Bucket</label>
            <select value={bucket} onChange={(e) => setBucket(e.target.value)} className={styles.filterSelect}>
              {buckets.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
        )}

        {showFilter("status") && (
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)} className={styles.filterSelect}>
              {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        )}

        {showFilter("date") && (
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Date</label>
            <select value={date} onChange={(e) => setDate(e.target.value)} className={styles.filterSelect}>
              {dates.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            {date === "Custom" && (
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className={styles.filterInput} />
            )}
          </div>
        )}

        {youtubeAnalytics && showFilter("contentType") && (
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Content Type</label>
            <select value={contentType} onChange={(e) => setContentType(e.target.value)} className={styles.filterSelect}>
              {contentTypes.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
        )}

        {showFilter("startDate") && (
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Start Date</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className={styles.filterInput} />
          </div>
        )}

        {showFilter("endDate") && (
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>End Date</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className={styles.filterInput} />
          </div>
        )}

        {showFilter("search") && (
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Search</label>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className={styles.filterInput} placeholder="Search..." />
          </div>
        )}
      </div>

      <div className={styles.resetButtonContainer}>
        <button className={styles.resetButton} onClick={() => {
          setCompany("All Companies"); setSubject("All Subjects"); setJourney("All Journeys"); setBucket("All Buckets");
          setStatus("All Statuses"); setDate("Last 30 Days"); setContentType("All Content Types");
          setStartDate(""); setEndDate(""); setSearch("");
        }}>Reset Filter</button>
      </div>
    </div>
  );
};

export default Filters;