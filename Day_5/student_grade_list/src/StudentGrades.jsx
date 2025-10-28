import React, { useState } from "react";
import StudentList from "./StudentList";
import FilterButtons from "./FilterButtons";

const StudentGrades = () => {
  const [filter, setFilter] = useState("All");

  const students = [
    { name: "Chidi Okafor", subject: "Math", score: 75 },
    { name: "Amaka Johnson", subject: "Math", score: 45 },
    { name: "Tunde Adeyemi", subject: "Math", score: 88 },
    { name: "Bisi Lawal", subject: "Math", score: 30 },
    { name: "Kemi Balogun", subject: "Math", score: 90 },
  ];

  const passedStudents = students.filter((s) => s.score >= 50);
  const failedStudents = students.filter((s) => s.score < 50);

  const filteredStudents =
    filter === "Passed"
      ? passedStudents
      : filter === "Failed"
      ? failedStudents
      : students;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0f7fa, #fce4ec)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        padding: "40px",
      }}
    >
      <div
        style={{
          background: "#ffffffcc",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          width: "90%",
          maxWidth: "600px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          📚 Student Grades
        </h2>

        <FilterButtons filter={filter} setFilter={setFilter} />

        <StudentList students={filteredStudents} />

        <hr style={{ margin: "20px 0" }} />

        <p style={{ textAlign: "center", color: "#444" }}>
          Total Students: {students.length} | Passed: {passedStudents.length} |{" "}
          Failed: {failedStudents.length}
        </p>
      </div>
    </div>
  );
};

export default StudentGrades;
