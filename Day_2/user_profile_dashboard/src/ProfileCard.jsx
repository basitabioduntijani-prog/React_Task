// src/components/ProfileCard.jsx
import React from "react";

const ProfileCard = ({ children }) => {
  return (
    <div style={styles.card}>
      {children}
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#ffffff", // white for clarity
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    width: "380px",
    margin: "60px auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
};

export default ProfileCard;
