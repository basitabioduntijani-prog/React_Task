// src/Skills.jsx
import React from "react";
import "./App.css";

function Skills() {
  const skills = ["React", "JavaScript", "HTML", "CSS", "Git/GitHub"];

  return (
    <section className="skills">
      <h2>My Tech Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
