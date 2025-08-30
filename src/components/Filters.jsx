import React, { useState } from "react";

const Filters = () => {
  const [company, setCompany] = useState("All Companies");
  const [subject, setSubject] = useState("All Subjects");
  const [date, setDate] = useState("Last 30 Days"); // Changed default to match screenshot

  const companies = ["All Companies", "Company 1", "Company 2", "Company 3", "Company 4"];
  const subjects = ["All Subjects", "Health", "Career", "Mental Health", "Finance"];
  const dates = ["Last 7 days", "Last 30 Days", "Last 60 Days", "Last 90 Days", "Custom"]; // Added Last 30 Days

  return (
    <div style={{ padding: "0px", display: "flex", gap: "15px", marginBottom: "20px" }}>
      {/* Company Filter */}
      <div style={{ flex: 1 }}>
        <label style={{ fontSize: "13px", display: "block", marginBottom: "4px", color: "#666" }}>
          Company
        </label>
        <select
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "14px",
            appearance: "none", // Remove default arrow
            background: `url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2C114.7L154.5%2C247.3c-2.4%2C2.4-5.6%2C3.7-9.2%2C3.7s-6.8-1.3-9.2-3.7L5.4%2C114.7c-4.8-4.8-4.8-12.5%2C0-17.3l23.5-23.5c4.8-4.8%2C12.5-4.8%2C17.3%2C0l106%2C106l106-106c4.8-4.8%2C12.5-4.8%2C17.3%2C0l23.5%2C23.5C291.9%2C102.2%2C291.9%2C109.9%2C287%2C114.7z%22%2F%3E%3C%2Fsvg%3E') no-repeat right 8px center`,
            backgroundSize: "10px",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
        >
          {companies.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Subject Filter */}
      <div style={{ flex: 1 }}>
        <label style={{ fontSize: "13px", display: "block", marginBottom: "4px", color: "#666" }}>
          Subject
        </label>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "14px",
            appearance: "none",
            background: `url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2C114.7L154.5%2C247.3c-2.4%2C2.4-5.6%2C3.7-9.2%2C3.7s-6.8-1.3-9.2-3.7L5.4%2C114.7c-4.8-4.8-4.8-12.5%2C0-17.3l23.5-23.5c4.8-4.8%2C12.5-4.8%2C17.3%2C0l106%2C106l106-106c4.8-4.8%2C12.5-4.8%2C17.3%2C0l23.5%2C23.5C291.9%2C102.2%2C291.9%2C109.9%2C287%2C114.7z%22%2F%3E%3C%2Fsvg%3E') no-repeat right 8px center`,
            backgroundSize: "10px",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
        >
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Date Filter */}
      <div style={{ flex: 1 }}>
        <label style={{ fontSize: "13px", display: "block", marginBottom: "4px", color: "#666" }}>
          Date
        </label>
        <select
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "14px",
            appearance: "none",
            background: `url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2C114.7L154.5%2C247.3c-2.4%2C2.4-5.6%2C3.7-9.2%2C3.7s-6.8-1.3-9.2-3.7L5.4%2C114.7c-4.8-4.8-4.8-12.5%2C0-17.3l23.5-23.5c4.8-4.8%2C12.5-4.8%2C17.3%2C0l106%2C106l106-106c4.8-4.8%2C12.5-4.8%2C17.3%2C0l23.5%2C23.5C291.9%2C102.2%2C291.9%2C109.9%2C287%2C114.7z%22%2F%3E%3C%2Fsvg%3E') no-repeat right 8px center`,
            backgroundSize: "10px",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
        >
          {dates.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        {date === "Custom" && (
          <input
            type="date"
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              fontSize: "14px",
              marginTop: "8px",
            }}
          />
        )}
      </div>

      <button
        style={{
          padding: "8px 15px",
          borderRadius: "50px",
          border: "1px solid #AB1A52",
          background: "#fff",
          color: "#AB1A52",
          cursor: "pointer",
          fontSize: "14px",
          alignSelf: "flex-end", // Align to the bottom of the filter row
          fontWeight: "500",  
        }}
      >
        Reset Filter
      </button>
    </div>
  );
};

export default Filters;