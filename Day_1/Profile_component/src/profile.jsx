// src/Profile.jsx
import React from "react";

function Profile({ image, name, role, description }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "16px",
      textAlign: "center",
      width: "250px",
      margin: "20px auto",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{ width: "100px", height: "100px", borderRadius: "50%" }} 
      />
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Profile;
