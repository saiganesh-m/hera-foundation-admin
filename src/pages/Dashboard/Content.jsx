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
  faTimes,
  faPencilAlt,
  faTrash,
  faEyeSlash,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

const Content = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Budgeting for Pregnancy",
      journey: "Pregnancy Journey",
      subject: "Finance",
      contentType: "Deep Dive",
      status: "Live",
      publishedOn: "01-09-2025",
      views: "1500",
      avgWatch: "12.5m",
      youtubeId: "bLVAyuhCYYk",
    },
    {
      id: 2,
      title: "Financial Planning for New Parents",
      journey: "Preconception Journey",
      subject: "Finance",
      contentType: "Deep Dive",
      status: "Scheduled",
      publishedOn: "15-10-2025",
      views: "800",
      avgWatch: "10.0m",
      youtubeId: "S9ZVbb4GpyQ",
    },
    {
      id: 3,
      title: "Coping with Perinatal Anxiety",
      journey: "Pregnancy Journey",
      subject: "Mental Health",
      contentType: "Deep Dive",
      status: "Live",
      publishedOn: "05-09-2025",
      views: "2100",
      avgWatch: "14.0m",
      youtubeId: "o4X3KoySMBE",
    },
    {
      id: 4,
      title: "Mindfulness for Expecting Parents",
      journey: "Preconception Journey",
      subject: "Mental Health",
      contentType: "Deep Dive",
      status: "Live",
      publishedOn: "10-09-2025",
      views: "1800",
      avgWatch: "13.2m",
      youtubeId: "lecO3r-A3VQ",
    },
    {
      id: 5,
      title: "Postpartum Depression: Support & Resources",
      journey: "Return To Work Journey",
      subject: "Mental Health",
      contentType: "Deep Dive",
      status: "Scheduled",
      publishedOn: "20-11-2025",
      views: "1200",
      avgWatch: "16.1m",
      youtubeId: "FMI3Jl7OVw0",
    },
    {
      id: 6,
      title: "Building Resilience as a New Parent",
      journey: "Return To Work Journey",
      subject: "Mental Health",
      contentType: "Deep Dive",
      status: "Hidden",
      publishedOn: "01-12-2025",
      views: "950",
      avgWatch: "11.8m",
      youtubeId: "lTlI5ibTuxM",
    },
    {
      id: 7,
      title: "Nutrition During Pregnancy",
      journey: "Pregnancy Journey",
      subject: "Health",
      contentType: "Deep Dive",
      status: "Live",
      publishedOn: "03-09-2025",
      views: "2500",
      avgWatch: "18.0m",
      youtubeId: "MjImD9KLPJM",
    },
    {
      id: 8,
      title: "Exercise Routines for Expecting Mothers",
      journey: "Pregnancy Journey",
      subject: "Health",
      contentType: "Deep Dive",
      status: "Live",
      publishedOn: "08-09-2025",
      views: "1900",
      avgWatch: "15.5m",
      youtubeId: "t5W0Vsp4hjw",
    },
    {
      id: 9,
      title: "Understanding Childbirth Options",
      journey: "Pregnancy Journey",
      subject: "Health",
      contentType: "Deep Dive",
      status: "Scheduled",
      publishedOn: "22-10-2025",
      views: "1600",
      avgWatch: "20.0m",
      youtubeId: "m4yRd69soSw",
    },
    {
      id: 10,
      title: "Infant Care Basics",
      journey: "Return To Work Journey",
      subject: "Health",
      contentType: "Deep Dive",
      status: "Live",
      publishedOn: "10-11-2025",
      views: "2800",
      avgWatch: "22.3m",
      youtubeId: "R-FrwdBsos8",
    },
    {
      id: 11,
      title: "Postnatal Recovery Tips",
      journey: "Return To Work Journey",
      subject: "Health",
      contentType: "Deep Dive",
      status: "Live",
      publishedOn: "15-11-2025",
      views: "1750",
      avgWatch: "17.9m",
      youtubeId: "H2FiWmZUJqo",
    },
    {
      id: 12,
      title: "Breastfeeding and Lactation Support",
      journey: "Return To Work Journey",
      subject: "Health",
      contentType: "Deep Dive",
      status: "Scheduled",
      publishedOn: "01-12-2025",
      views: "1400",
      avgWatch: "19.2m",
      youtubeId: "BBO9_DFlsl8",
    },
    {
      id: 13,
      title: "Balancing Career and Parenthood",
      journey: "Return To Work Journey",
      subject: "Career",
      contentType: "Deep Dive",
      status: "Live",
      publishedOn: "20-09-2025",
      views: "2300",
      avgWatch: "16.8m",
      youtubeId: "5ora94DPuD4",
    },
  ]);

  const [selectedView, setSelectedView] = useState("table");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState("");
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    journey: "",
    subject: "",
    contentType: "",
    youtubeId: "",
    publishedOn: "",
  });

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handleEdit = (video) => {
    setEditingVideo(video);
    setFormData({
      title: video.title,
      journey: video.journey,
      subject: video.subject,
      contentType: video.contentType,
      youtubeId: video.youtubeId,
      publishedOn: video.publishedOn,
    });
    setShowEditModal(true);
    setActiveDropdown(null);
  };

  const handleSaveChanges = () => {
    if (editingVideo) {
      setVideos(prevVideos =>
        prevVideos.map(video =>
          video.id === editingVideo.id
            ? { ...video, ...formData }
            : video
        )
      );
    }
    setShowEditModal(false);
    setEditingVideo(null);
  };

  const handleLive = (id) => {
    setVideos(prevVideos =>
      prevVideos.map(video =>
        video.id === id ? { ...video, status: "Live" } : video
      )
    );
    setActiveDropdown(null);
  };

  const handleSchedule = (id) => {
    setVideos(prevVideos =>
      prevVideos.map(video =>
        video.id === id ? { ...video, status: "Scheduled" } : video
      )
    );
    setActiveDropdown(null);
  };

  const handleHide = (id) => {
    setVideos(prevVideos =>
      prevVideos.map(video =>
        video.id === id ? { ...video, status: "Hidden" } : video
      )
    );
    setActiveDropdown(null);
  };

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete this video?`)) {
      setVideos(prevVideos => prevVideos.filter(video => video.id !== id));
    }
    setActiveDropdown(null);
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

  const openVideoModal = (youtubeId, title) => {
    setCurrentVideoId(youtubeId);
    setCurrentVideoTitle(title);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setCurrentVideoId("");
    setCurrentVideoTitle("");
    setShowVideoModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
                <div 
                  className={styles.tableThumbnailWrapper} 
                  onClick={() => openVideoModal(video.youtubeId, video.title)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                    alt={video.title}
                    className={styles.tableThumbnail}
                  />
                  <div className={styles.tableOverlay}>
                    <FontAwesomeIcon icon={faPlay} className={styles.tablePlayIcon} />
                  </div>
                </div>
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
                    className={`${styles.actionButton} ${styles.editButton}`}
                    onClick={() => handleEdit(video)}
                  >
                   Edit
                  </button>
                  <div className={styles.actionDropdown}>
                    <button
                      className={`${styles.actionButton} ${styles.moreButton}`}
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
                          <FontAwesomeIcon icon={faPlay} /> Set Live
                        </button>
                        <button
                          className={`${styles.dropdownButton} ${styles.scheduleButton}`}
                          onClick={() => handleSchedule(video.id)}
                        >
                          <FontAwesomeIcon icon={faCalendarCheck} /> Schedule
                        </button>
                        <button
                          className={`${styles.dropdownButton} ${styles.hideButton}`}
                          onClick={() => handleHide(video.id)}
                        >
                          <FontAwesomeIcon icon={faEyeSlash} /> Hide
                        </button>
                        <button
                          className={`${styles.dropdownButton} ${styles.deleteButton}`}
                          onClick={() => handleDelete(video.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} /> Delete
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
          <div className={styles.previewThumbnailWrapper} onClick={() => openVideoModal(v.youtubeId, v.title)}>
            <img
              src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`}
              alt={v.title}
              className={styles.previewThumbnail}
            />
            <div className={styles.previewOverlay}>
              <FontAwesomeIcon icon={faPlay} className={styles.previewPlayIcon} />
              <span className={styles.previewDuration}>25:00</span>
            </div>
          </div>
          <div className={styles.previewCardContent}>
            <h4 className={styles.previewCardTitle}>{v.title}</h4>
            <p className={styles.previewCardMeta}>
              {v.journey} • {v.subject}
              {v.contentType && ` • ${v.contentType}`}
            </p>
            <div className={styles.previewCardStats}>
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
              <span className={styles.previewStatItem}>
                <FontAwesomeIcon icon={faEye} /> {v.views}
              </span>
              <span className={styles.previewStatItem}>
                <FontAwesomeIcon icon={faClock} /> {v.avgWatch} avg
              </span>
           
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderArrangeView = () => {
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
                >
               <div className={styles.arrangeHeader}>
                    <div className={styles.arrangeLeft}>
                      <span className={styles.arrangeSubject}>{subject}</span>
                      <p className={styles.arrangeJourney}>{journey}</p>
                    </div>

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



                  <div className={styles.arrangeVideoList}>
                    {vids.map((v) => (
                      <div
                        key={v.id}
                        className={styles.arrangeVideoItem}
                      >
                        <div 
                          className={styles.arrangeThumbnailWrapper}
                          onClick={() => openVideoModal(v.youtubeId, v.title)}
                        >
                          <img
                            src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`}
                            alt={v.title}
                            className={styles.arrangeVideoThumbnail}
                          />
                          <div className={styles.arrangeOverlay}>
                            <FontAwesomeIcon icon={faPlay} className={styles.arrangePlayIcon} />
                          </div>
                        </div>
                        <div className={styles.arrangeVideoDetails}>
                          <p className={styles.arrangeVideoTitle}>{v.title}</p>
                          <p className={styles.arrangeVideoMeta}>
                            {v.status} • {v.views} views
                          </p>
                        </div>
                        <button
                          className={styles.arrangePreviewButton}
                          onClick={() => openVideoModal(v.youtubeId, v.title)}
                        >
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

  const getCardTitle = () => {
    switch (selectedView) {
      case "table":
        return "Video Library";
      case "preview":
        return "Preview (Playable)";
      case "arrange":
        return "Arrange by Subject (Drag and drop)";
      default:
        return "Content Overview";
    }
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
      
      {/* Journey */}
      <select className={styles.formSelect} defaultValue="">
        <option value="" disabled>
          Journey
        </option>
        <option>Preconception Journey</option>
        <option>Return To Work Journey</option>
        <option>Pregnancy Journey</option>
      </select>

      {/* Subject */}
      <select className={styles.formSelect} defaultValue="">
        <option value="" disabled>
          Subject
        </option>
        <option>Health</option>
        <option>Mental Health</option>
        <option>Finance</option>
        <option>Career</option>
      </select>

      {/* Content Type */}
      <select className={styles.formSelect} defaultValue="">
        <option value="" disabled>
          Content Type
        </option>
        <option>Quick Bite</option>
        <option>Deep Dive</option>
      </select>

      {/* Video Title */}
      <input
        type="text"
        className={styles.formInput}
        placeholder="Title"
      />

      {/* YouTube Link */}
      <input
        type="text"
        className={styles.formInput}
        placeholder="YouTube Link"
      />

      {/* Publish Date */}
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

    {/* Add Video Button */}
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
                Preview
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
              {selectedView === "table" && (
                <Filters
                  filters={["journey", "subject", "contentType", "status", "search"]}
                  title="Filters"
                  youtubeAnalytics={true} // make sure this is true for Content Type
                />
              )}
              {selectedView === "preview" && (
                <Filters filters={["journey", "subject", "bucket", "status", "search"]} title="Filters" />
              )}
              {selectedView === "arrange" && (
                <Filters filters={["journey", "subject", "bucket", "status", "search"]} title="Filters" />
              )}
            </div>

          {/* Main content area for rendering views */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{getCardTitle()}</h3>
            {selectedView === "table" && renderTableView()}
            {selectedView === "preview" && renderPreviewView()}
            {selectedView === "arrange" && renderArrangeView()}
          </div>
        </div>
      </div>

      {/* Video Playback Modal */}
      {showVideoModal && (
        <div className={styles.videoModalOverlay} onClick={closeVideoModal}>
          <div className={styles.videoModalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.videoModalClose} onClick={closeVideoModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            {currentVideoTitle && (
              <h4 className={styles.videoModalTitle}>
                {currentVideoTitle}
              </h4>
            )}
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Edit Video Modal */}
      {showEditModal && (
        <div className={styles.modalOverlay} onClick={() => setShowEditModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Edit Video</h3>
              <button 
                className={styles.modalClose} 
                onClick={() => setShowEditModal(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            {editingVideo && (
              < div className={styles.editThumbnailWrapper}>
                <img
                  src={`https://img.youtube.com/vi/${editingVideo.youtubeId}/mqdefault.jpg`}
                  alt={editingVideo.title}
                  className={styles.editThumbnail}
                />
                <p className={styles.editThumbnailTitle}>{editingVideo.title}</p>
              </div>
            )}
            
            <div className={styles.modalBody}>
              <div className={styles.modalForm}>
                <div className={styles.formRow}>
                  <label className={styles.formLabel}>Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />
                </div>
                
                <div className={styles.formRow}>
                  <label className={styles.formLabel}>Journey</label>
                  <select
                    name="journey"
                    value={formData.journey}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                  >
                    <option value="Preconception Journey">Preconception Journey</option>
                    <option value="Pregnancy Journey">Pregnancy Journey</option>
                    <option value="Return To Work Journey">Return To Work Journey</option>
                  </select>
                </div>
                
                <div className={styles.formRow}>
                  <label className={styles.formLabel}>Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                  >
                    <option value="Health">Health</option>
                    <option value="Mental Health">Mental Health</option>
                    <option value="Finance">Finance</option>
                    <option value="Career">Career</option>
                  </select>
                </div>
                
                <div className={styles.formRow}>
                  <label className={styles.formLabel}>Content Type</label>
                  <select
                    name="contentType"
                    value={formData.contentType}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                  >
                    <option value="Quick Bite">Quick Bite</option>
                    <option value="Deep Dive">Deep Dive</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className={styles.modalFooter}>
              <button 
                className={styles.cancelButton}
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button 
                className={styles.saveButton}
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;