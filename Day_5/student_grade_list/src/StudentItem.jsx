import React from "react";

const StudentItem = ({ student }) => {
  const isPass = student.score >= 50;

  return (
    <li
      style={{
        margin: "10px 0",
        background: "#f8f9fa",
        padding: "10px 15px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderLeft: `6px solid ${isPass ? "#2e7d32" : "#c62828"}`,
      }}
    >
      <span>
        <strong>{student.name}</strong> - {student.subject}:{" "}
        <b>{student.score}</b>
      </span>
      <span
        style={{
          color: isPass ? "green" : "red",
          fontWeight: "bold",
        }}
      >
        {isPass ? "✅ PASS" : "❌ FAIL"}
      </span>
    </li>
  );
};

export default StudentItem;
