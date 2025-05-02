import React from "react";
import styles from "./styles/dashboard.module.css";
import DashNavigation from "./DashNavigation";
const Dashboard = () => {
  return (
    <div className={styles.container}>
    
      <DashNavigation/>
    </div>
  );
};

export default Dashboard;
