// src/components/ProfileStats.jsx
import React, { useState } from 'react';

const ProfileStats = ({ projects, followers, following }) => {
  const [activeStat, setActiveStat] = useState(null);

  const handleClick = (key) => {
    setActiveStat(key);
    alert(`${key.toUpperCase()} clicked!`);
  };

  const statStyle = (key) => ({
    margin: '0 10px',
    cursor: 'pointer',
    color: activeStat === key ? '#007bff' : '#333',
    transition: 'color 0.3s ease, transform 0.2s ease',
  });

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <span
        style={statStyle('projects')}
        onMouseEnter={() => setActiveStat('projects')}
        onMouseLeave={() => setActiveStat(null)}
        onClick={() => handleClick('projects')}
      >
        <strong>Projects:</strong> {projects}
      </span>
      |
      <span
        style={statStyle('followers')}
        onMouseEnter={() => setActiveStat('followers')}
        onMouseLeave={() => setActiveStat(null)}
        onClick={() => handleClick('followers')}
      >
        <strong> Followers:</strong> {followers}
      </span>
      |
      <span
        style={statStyle('following')}
        onMouseEnter={() => setActiveStat('following')}
        onMouseLeave={() => setActiveStat(null)}
        onClick={() => handleClick('following')}
      >
        <strong> Following:</strong> {following}
      </span>
    </div>
  );
};

export default ProfileStats;
