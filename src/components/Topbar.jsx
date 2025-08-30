// src/components/Topbar.jsx
import React from "react";

const Topbar = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        padding: "0 20px", // optional horizontal padding
        boxSizing: "border-box",
      }}
    >
      {/* Button aligned to the right */}
      <button
        style={{
          marginLeft: "auto", // pushes button to far right
          background: "#AB1A52", // fixed color hex
          color: "#fff",
          border: "none",
          padding: "8px 15px",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "500",
          boxShadow: "none", // remove shadow so it doesn't look like a card
          transition: "background 0.2s ease",
        }}
      >
        Export CSV
      </button>
    </div>
  );
};

export default Topbar;
