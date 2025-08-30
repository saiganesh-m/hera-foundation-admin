import React from "react";

const StatCard = ({ title, value, subtitle }) => {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e0e0e0", // Lighter border
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.03)", // Subtle shadow
      }}
    >
      <h4 style={{ margin: "0 0 6px 0", fontSize: "13px", color: "#666" }}>
        {title}
      </h4>
      <h2 style={{ margin: 0, fontSize: "22px", color: "#000", fontWeight: "600" }}>{value}</h2>
      <p style={{ margin: 0, fontSize: "12px", color: "#888", marginTop: "4px" }}>{subtitle}</p>
    </div>
  );
};

export default StatCard;