import React from "react";
import styles from "./StatCard.module.css";

const StatCard = ({ title, value, subtitle }) => {
  return (
    <div className={styles.statCard}>
      <h4 className={styles.statTitle}>{title}</h4>
      <h2 className={styles.statValue}>{value}</h2>
      <p className={styles.statSubtitle}>{subtitle}</p>
    </div>
  );
};

export default StatCard;