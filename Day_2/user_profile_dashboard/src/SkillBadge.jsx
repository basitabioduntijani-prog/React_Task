// src/components/SkillBadge.jsx
import React from 'react';

const colors = {
  Beginner: '#808080',
  Intermediate: '#007bff',
  Expert: '#28a745',
};

const SkillBadge = ({ skill, level }) => {
  const bg = colors[level] || '#ccc';

  return (
    <span
      style={{
        backgroundColor: bg,
        color: 'white',
        padding: '6px 12px',
        borderRadius: '20px',
        margin: '5px',
        fontSize: '0.9rem',
        display: 'inline-block',
      }}
    >
      {skill} - {level}
    </span>
  );
};

export default SkillBadge;
