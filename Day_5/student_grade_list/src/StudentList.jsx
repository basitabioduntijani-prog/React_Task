import React from "react";
import StudentItem from "./StudentItem";

const StudentList = ({ students }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {students.map((student, index) => (
        <StudentItem key={index} student={student} />
      ))}
    </ul>
  );
};

export default StudentList;
