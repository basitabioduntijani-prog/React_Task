// src/components/ProfileHeader.jsx
import React from "react";

const ProfileHeader = ({ name, title, avatar }) => {
  return (
    <div style={styles.container}>
      <img src={avatar} alt={name} style={styles.avatar} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.title}>{title}</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginBottom: "20px",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #007bff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  name: {
    marginTop: "15px",
    fontSize: "1.6rem",
    color: "#222", // dark text color for visibility
    fontWeight: "bold",
  },
  title: {
    color: "#555",
    fontStyle: "italic",
    fontSize: "1rem",
  },
};

export default ProfileHeader;
