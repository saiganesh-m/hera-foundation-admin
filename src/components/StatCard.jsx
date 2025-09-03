import React from "react";
import styles from "./StatCard.module.css";

const StatCard = ({ title, value, subtitle, icon, color }) => {
  return (
    <div className={styles.statCard} style={{ "--card-color": color }}>
      <div className={styles.statHeader}>
        <h4 className={styles.statTitle}>{title}</h4>
      </div>
      <h2 className={styles.statValue}>{value}</h2>
      <p className={styles.statSubtitle}>{subtitle}</p>
    </div>
  );
};

export default StatCard;
