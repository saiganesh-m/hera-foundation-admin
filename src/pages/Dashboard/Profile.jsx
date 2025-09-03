// src/pages/Dashboard/Profile.jsx
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import styles from "./Profile.module.css";
import Logo from "./logo1.png";

const Profile = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className={styles.profileContainer}>
      <Sidebar />
      
      <div className={styles.mainContent}>
        <div className={styles.contentArea}>
          <div className={styles.headerContainer}>
            <div className={styles.pageTitleContainer}>
              <h2 className={styles.pageTitle}>Profile</h2>
              <p className={styles.pageSubtitle}>
                Manage your admin account settings and security
              </p>
            </div>

            <div className={styles.rightSection}>
              <div className={styles.userEmail}>admin@theherafoundation.com</div>
              <button className={styles.logoutButton}>Log Out</button>
            </div>
          </div>
        </div>
        
        <div className={styles.gridContainer}>
          <div className={styles.leftColumn}>
            <div className={styles.profileCard}>
              <div className={styles.avatarContainer}>
                <div className={styles.heraAdminLogo} style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                  <img src={Logo} alt="Hera Logo" className={styles.logoImage} />
                  <div>
                    <h3 className={styles.userName}>Hera Admin</h3>
                    <p className={styles.userRole}>Admin Console</p>
                  </div>
                </div>    
                
            <div className={styles.uploadContainer}>
              <input
                type="file"
                id="fileUpload"
                className={styles.uploadInput}
                onChange={(e) =>
                  e.target.nextElementSibling.nextElementSibling.innerText =
                    e.target.files[0]?.name || "No file chosen"
                }
              />
              <label htmlFor="fileUpload" className={styles.uploadLabel}>
                Choose File
              </label>
              <span className={styles.fileText}>No file chosen</span>
            </div>

              </div>
            </div>
            
            <div className={styles.profileCard}>
              <div className={styles.infoContainer}>
                <h4 className={styles.infoTitle}>Session</h4>
                <p className={styles.infoItem}>
                  <span className={styles.infoLabel}>Email : </span> 
                  admin@theherafoundation.com
                </p>
                <p className={styles.infoItem}>
                  <span className={styles.infoLabel}>Role : </span> 
                  admin
                </p>
                <p className={styles.infoItem}>
                  <span className={styles.infoLabel}>Since : </span> 
                  28/08/2023, 10:49:30 AM
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.rightColumn}>
            <div className={styles.detailsCard}>
              <h3 className={styles.cardTitle}>Profile Details</h3>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Name</label>
                  <input
                    type="text"
                    value="Hera Admin"
                    className={styles.formInput}
                    readOnly
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className={styles.formInput}
                  />
                </div>
              </div>
              
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email</label>
                  <input
                    type="email"
                    value="admin@theherafoundation.com"
                    className={styles.formInput}
                    readOnly
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Timezone</label>
                  <select className={styles.formInput}>
                    <option>Asia/Kolkata (IST)</option>
                    <option>UTC</option>
                    <option>US/Eastern</option>
                  </select>
                </div>
              </div>
              <button className={styles.saveButton}>Save Changes</button>
            </div>
            
            <div className={styles.detailsCard}>
              <h3 className={styles.cardTitle}>Change Password</h3>
              <div className={styles.passwordGrid}>
                <div className={styles.formGroup}>
                  <input
                    type="password"
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={styles.formInput}
                  />
                </div>
              </div>
              <button className={styles.updateButton}>Update Password</button>
              <p className={styles.passwordNote}>Keep a strong password</p>
            </div>
            
            <div className={styles.legalCard}>
              <h3 className={styles.legalTitle}>About & Legal</h3>
              <div className={styles.legalInfo}>
                <p className={styles.legalItem}>
                  App version : <span className={styles.legalValue}>0.1.0</span>
                </p>
                <p className={styles.legalItem}>
                  Build : <span className={styles.legalValue}>MVP-Admin</span>  
                </p>
                <p className={styles.legalItem}>
                  Region : <span className={styles.legalValue}>IN</span>
                </p>
                <p className={styles.legalLinks}>
                  Links :{" "}
                  <a href="#" className={styles.link}>
                    Terms of Service
                  </a>{" "}
                  &{" "}
                  <a href="#" className={styles.link}>
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;