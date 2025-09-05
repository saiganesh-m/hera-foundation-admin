import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Filters from "../../components/Filters";
import styles from "./Content.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faEllipsisV,
  faEye,
  faClock,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const Content = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Negotiating Work Policies",
      journey: "Preconception Journey",
      subject: "Health",
      contentType: "Deep Dive",
      status: "Live",
      publishedOn: "28-08-2025",
      views: "1,440",
      avgWatch: "7.9m",
      thumbnail: "https://i.ibb.co/Lzd3B3q/pregnant-woman-on-call.png",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      journey: "Preconception Journey",
      subject: "Health",
      contentType: "Quick Bite", // Changed to Quick Bite for screenshot
      status: "Live", // Changed to Live for screenshot
      publishedOn: "28-08-2025",
      views: "1,440",
      avgWatch: "7.9m",
      thumbnail: "https://i.ibb.co/Lzd3B3q/pregnant-woman-on-call.png",
    },
    {
      id: 3,
      title: "Negotiating Work Policies",
      journey: "Preconception Journey",
      subject: "Mental Health",
      contentType: "Deep Dive",
      status: "Hidden",
      publishedOn: "28-08-2025",
      views: "1,440",
      avgWatch: "7.9m",
      thumbnail: "https://i.ibb.co/Lzd3B3q/pregnant-woman-on-call.png",
    },
    {
      id: 4,
      title: "Negotiating Work Policies",
      journey: "Preconception Journey",
      subject: "Finance",
      contentType: "Deep Dive",
      status: "Live",
      publishedOn: "28-08-2025",
      views: "1,440",
      avgWatch: "7.9m",
      thumbnail: "https://i.ibb.co/Lzd3B3q/pregnant-woman-on-call.png",
    },
    {
      id: 5,
      title: "Negotiating Work Policies",
      journey: "Pregnancy Journey",
      subject: "Career",
      contentType: "Deep Dive",
      status: "Live",
      publishedOn: "28-08-2025",
      views: "1,440",
      avgWatch: "7.9m",
      thumbnail: "https://i.ibb.co/Lzd3B3q/pregnant-woman-on-call.png",
    },
    {
      id: 6,
      title: "Negotiating Work Policies",
      journey: "Pregnancy Journey",
      subject: "Health",
      contentType: "Quick Bite",
      status: "Live",
      publishedOn: "28-08-2025",
      views: "1,440",
      avgWatch: "7.9m",
      thumbnail: "https://i.ibb.co/Lzd3B3q/pregnant-woman-on-call.png",
    },
    {
      id: 7,
      title: "Lorem Ipsum",
      journey: "Preconception Journey",
      subject: "Health",
      contentType: "Deep Dive", // Changed to Deep Dive for screenshot
      status: "Live",
      publishedOn: "28-08-2025",
      views: "1,440",
      avgWatch: "7.9m",
      thumbnail: "https://i.ibb.co/Lzd3B3q/pregnant-woman-on-call.png",
    },
    {
      id: 8,
      title: "Negotiating Work Policies",
      journey: "Preconception Journey",
      subject: "Career",
      contentType: "Deep Dive",
      status: "Live",
      publishedOn: "28-08-2025",
      views: "1,440",
      avgWatch: "7.9m",
      thumbnail: "https://i.ibb.co/Lzd3B3q/pregnant-woman-on-call.png",
    },
    {
      id: 9,
      title: "Negotiating Work Policies",
      journey: "Pregnancy Journey",
      subject: "Mental Health",
      contentType: "Deep Dive",
      status: "Live",
      publishedOn: "28-08-2025",
      views: "1,440",
      avgWatch: "7.9m",
      thumbnail: "https://i.ibb.co/Lzd3B3q/pregnant-woman-on-call.png",
    },
    {
      id: 10,
      title: "Negotiating Work Policies",
      journey: "Pregnancy Journey",
      subject: "Finance",
      contentType: "Deep Dive",
      status: "Live",
      publishedOn: "28-08-2025",
      views: "1,440",
      avgWatch: "7.9m",
      thumbnail: "https://i.ibb.co/Lzd3B3q/pregnant-woman-on-call.png",
    },
    {
      id: 11,
      title: "Negotiating Work Policies",
      journey: "Pregnancy Journey",
      subject: "Career",
      contentType: "Deep Dive",
      status: "Live",
      publishedOn: "28-08-2025",
      views: "1,440",
      avgWatch: "7.9m",
      thumbnail: "https://i.ibb.co/Lzd3B3q/pregnant-woman-on-call.png",
    },
    {
      id: 12,
      title: "Negotiating Work Policies",
      journey: "Pregnancy Journey",
      subject: "Finance",
      contentType: "Deep Dive",
      status: "Live",
      publishedOn: "28-08-2025",
      views: "1,440",
      avgWatch: "7.9m",
      thumbnail: "https://i.ibb.co/Lzd3B3q/pregnant-woman-on-call.png",
    },
  ]);

  const [selectedView, setSelectedView] = useState("arrange"); // Changed default to arrange
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handleEdit = (id) => {
    console.log("Edit video with id:", id);
    // Implement edit modal functionality here
    alert(`Edit functionality for video ID: ${id}. Imagine a modal opening here.`);
  };

  const handleLive = (id) => {
    console.log("Set video live with id:", id);
    // Implement live functionality
  };

  const handleSchedule = (id) => {
    console.log("Schedule video with id:", id);
    // Implement schedule functionality
  };

  const handleHide = (id) => {
    console.log("Hide video with id:", id);
    // Implement hide functionality
  };

  const handleDelete = (id) => {
    console.log("Delete video with id:", id);
    // Implement delete functionality
  };

  const getJourneyChipColor = (journey) => {
    switch (journey) {
      case "Preconception Journey":
        return styles.journeyChipPreconception;
      case "Pregnancy Journey":
        return styles.journeyChipPregnancy;
      case "Return To Work Journey":
        return styles.journeyChipReturnToWork;
      default:
        return "";
    }
  };

  const renderTableView = () => (
    <div className={styles.tableContainer}>
      <table className={styles.dataTable}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={styles.tableHeader}>Thumbnail</th>
            <th className={styles.tableHeader}>Title</th>
            <th className={styles.tableHeader}>Journey</th>
            <th className={styles.tableHeader}>Subject</th>
            <th className={styles.tableHeader}>Content Type</th>
            <th className={styles.tableHeader}>Status</th>
            <th className={styles.tableHeader}>Published On</th>
            <th className={styles.tableHeader}>Views</th>
            <th className={styles.tableHeader}>Avg. Watch</th>
            <th className={styles.tableHeader}>Action</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video) => (
            <tr key={video.id} className={styles.tableRow}>
              <td className={styles.tableCell}>
                <input type="checkbox" className={styles.checkbox} />
              </td>
              <td className={styles.tableCell}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className={styles.thumbnail}
                />
              </td>
              <td className={`${styles.tableCell} ${styles.titleCell}`}>
                {video.title}
              </td>
              <td className={styles.tableCell}>
                <span className={`${styles.journeyChip} ${getJourneyChipColor(video.journey)}`}>
                  {video.journey}
                </span>
              </td>
              <td className={styles.tableCell}>{video.subject}</td>
              <td className={styles.tableCell}>{video.contentType}</td>
              <td className={styles.tableCell}>
                <span
                  className={`${styles.statusBadge} ${
                    video.status === "Live"
                      ? styles.statusLive
                      : video.status === "Scheduled"
                      ? styles.statusScheduled
                      : styles.statusHidden
                  }`}
                >
                  {video.status}
                </span>
              </td>
              <td className={styles.tableCell}>{video.publishedOn}</td>
              <td className={styles.tableCell}>{video.views}</td>
              <td className={styles.tableCell}>{video.avgWatch}</td>
              <td className={styles.tableCell}>
                <div className={styles.actionButtons}>
                  <button
                    className={styles.editButton}
                    onClick={() => handleEdit(video.id)}
                  >
                    Edit
                  </button>
                  <div className={styles.actionDropdown}>
                    <button
                      className={styles.moreButton}
                      onClick={() => toggleDropdown(video.id)}
                    >
                      <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                    {activeDropdown === video.id && (
                      <div className={styles.dropdownContent}>
                        <button
                          className={`${styles.dropdownButton} ${styles.liveButton}`}
                          onClick={() => handleLive(video.id)}
                        >
                          Live
                        </button>
                        <button
                          className={`${styles.dropdownButton} ${styles.scheduleButton}`}
                          onClick={() => handleSchedule(video.id)}
                        >
                          Schedule
                        </button>
                        <button
                          className={`${styles.dropdownButton} ${styles.hideButton}`}
                          onClick={() => handleHide(video.id)}
                        >
                          Hide
                        </button>
                        <button
                          className={`${styles.dropdownButton} ${styles.deleteButton}`}
                          onClick={() => handleDelete(video.id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderPreviewView = () => (
    <div className={styles.previewGrid}>
      {videos.map((v) => (
        <div key={v.id} className={styles.previewCard}>
          <div className={styles.thumbnailWrapper}>
            <img
              src={v.thumbnail}
              alt={v.title}
              className={styles.previewThumbnail}
            />
            <div className={styles.overlay}>
              <FontAwesomeIcon icon={faPlay} className={styles.playIcon} />
              <span className={styles.duration}>25:00</span>
            </div>
          </div>
          <div className={styles.cardContent}>
            {/* Removed "Your rights and craft confident" */}
            <h4 className={styles.cardTitle}>{v.title}</h4>
            <p className={styles.cardMeta}>
              {v.journey} • {v.subject}
              {v.contentType && ` • ${v.contentType}`}
            </p>
            <div className={styles.cardStats}>
              <span className={styles.statItem}>
                <FontAwesomeIcon icon={faEye} /> {v.views}
              </span>
              <span className={styles.statItem}>
                <FontAwesomeIcon icon={faClock} /> {v.avgWatch} avg
              </span>
              <span
                className={`${styles.statusBadge} ${
                  v.status === "Live"
                    ? styles.statusLive
                    : v.status === "Scheduled"
                    ? styles.statusScheduled
                    : styles.statusHidden
                }`}
              >
                {v.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderArrangeView = () => {
    // Group videos by journey and then by subject for the arrange view structure
    const groupedByJourneyAndSubject = videos.reduce((acc, video) => {
      if (!acc[video.journey]) {
        acc[video.journey] = {};
      }
      if (!acc[video.journey][video.subject]) {
        acc[video.journey][video.subject] = [];
      }
      acc[video.journey][video.subject].push(video);
      return acc;
    }, {});

    return (
      <div className={styles.arrangeGrid}>
        {Object.entries(groupedByJourneyAndSubject).map(
          ([journey, subjects]) => (
            <React.Fragment key={journey}>
              {Object.entries(subjects).map(([subject, vids]) => (
                <div
                  key={`${journey}-${subject}`}
                  className={styles.arrangeCardWrapper}
                  // draggable
                  // onDragStart={(e) => {
                  //   e.dataTransfer.setData("text/plain", JSON.stringify({ journey, subject }));
                  // }}
                  // onDragOver={(e) => e.preventDefault()}
                  // onDrop={(e) => {
                  //   e.preventDefault();
                  //   const droppedData = JSON.parse(e.dataTransfer.getData("text/plain"));
                  //   console.log("Dropped on:", { journey, subject }, "from:", droppedData);
                  //   // Logic to reorder/move cards here
                  // }}
                >
                  <div className={styles.arrangeHeader}>
                    <span className={styles.arrangeSubject}>{subject}</span>
                    {/* Displaying content type of the first video in the group */}
                    {vids[0] && (
                      <span
                        className={`${styles.arrangeContentTypeBadge} ${
                          vids[0].contentType === "Deep Dive"
                            ? styles.deepDive
                            : styles.quickBite
                        }`}
                      >
                        {vids[0].contentType}
                      </span>
                    )}
                  </div>
                  {/* Displaying journey for the group */}
                  <p className={styles.arrangeJourney}>{journey}</p>

                  <div className={styles.arrangeVideoList}>
                    {vids.map((v) => (
                      <div
                        key={v.id}
                        className={styles.arrangeVideoItem}
                        // draggable
                        // onDragStart={(e) => {
                        //   e.stopPropagation(); // Prevent parent drag from triggering
                        //   e.dataTransfer.setData("text/plain", JSON.stringify({ videoId: v.id, oldJourney: journey, oldSubject: subject }));
                        // }}
                        // onDragOver={(e) => e.preventDefault()}
                        // onDrop={(e) => {
                        //   e.stopPropagation(); // Prevent parent drop from triggering
                        //   e.preventDefault();
                        //   const droppedData = JSON.parse(e.dataTransfer.getData("text/plain"));
                        //   console.log("Dropped video:", droppedData.videoId, "on item in", { journey, subject });
                        //   // Logic to reorder within the same subject or move to a different subject/journey
                        // }}
                      >
                        <img
                          src={v.thumbnail}
                          alt={v.title}
                          className={styles.arrangeVideoThumbnail}
                        />
                        <div className={styles.arrangeVideoDetails}>
                          <p className={styles.arrangeVideoTitle}>{v.title}</p>
                          <p className={styles.arrangeVideoMeta}>
                            {v.status} • {v.views} views
                          </p>
                        </div>
                        <button className={styles.arrangePreviewButton}>
                          Preview
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </React.Fragment>
          )
        )}
      </div>
    );
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>

      <div className={styles.mainContent}>
        <div className={styles.contentArea}>
          <div className={styles.pageHeader}>
            <h2 className={styles.pageTitle}>Content Management</h2>
            <p className={styles.pageSubtitle}>
              Add, preview, re-arrange, schedule, hide/unhide and move content
              across journeys & subjects
            </p>
          </div>

          {/* Add A New Video Section */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Add A New Video</h3>
            <div className={styles.addVideoForm}>
              <div className={styles.formGrid}>
                <select className={styles.formSelect} defaultValue="">
                  <option value="" disabled>
                    Journey
                  </option>
                  <option>Preconception Journey</option>
                  <option>Return To Work Journey</option>
                  <option>Pregnancy Journey</option>
                </select>

                <select className={styles.formSelect} defaultValue="">
                  <option value="" disabled>
                    Subject
                  </option>
                  <option>Health</option>
                  <option>Mental Health</option>
                  <option>Finance</option>
                  <option>Career</option>
                </select>

                <select className={styles.formSelect} defaultValue="">
                  <option value="" disabled>
                    Content Type
                  </option>
                  <option>Quick Bite</option>
                  <option>Deep Dive</option>
                </select>

                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Video Title"
                />

                <div className={styles.inputWithIcon}>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="https://youtube.com/"
                  />
                </div>

                <div className={styles.inputWithIcon}>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="dd-mm-yyyy"
                  />
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className={styles.inputIcon}
                  />
                </div>
              </div>

              <div className={styles.addButtonContainer}>
                <button className={styles.addButton}>Add Video</button>
              </div>
            </div>
          </div>

          {/* View Selection Buttons */}
          <div className={styles.viewSelectionContainer}>
            <div className={styles.viewButtons}>
              <button
                className={`${styles.viewButton} ${
                  selectedView === "table" ? styles.viewButtonActive : ""
                }`}
                onClick={() => setSelectedView("table")}
              >
                Table View
              </button>
              <button
                className={`${styles.viewButton} ${
                  selectedView === "preview" ? styles.viewButtonActive : ""
                }`}
                onClick={() => setSelectedView("preview")}
              >
                Video Library
              </button>
              <button
                className={`${styles.viewButton} ${
                  selectedView === "arrange" ? styles.viewButtonActive : ""
                }`}
                onClick={() => setSelectedView("arrange")}
              >
                Arrange
              </button>
            </div>
          </div>

          <div className={styles.filterContainer}>
            <Filters />
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              Arrange by Subject (Drag and drop)
            </h3>
            {selectedView === "table" && renderTableView()}
            {selectedView === "preview" && renderPreviewView()}
            {selectedView === "arrange" && renderArrangeView()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;