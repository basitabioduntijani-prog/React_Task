// src/App.jsx
import React from 'react';
import ProfileCard from './ProfileCard';
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';
import SkillBadge from './SkillBadge';

function App() {
  return (
    <div style={{ backgroundColor: '#f4f6f8', minHeight: '100vh', padding: '40px' }}>
      <ProfileCard>
        <ProfileHeader
          name="Chinwe Okoro"
          title="Senior Developer at Paystack"
          avatar="https://randomuser.me/api/portraits/women/45.jpg"
        />

        <ProfileStats projects="45" followers="1.2K" following="300" />

        <div style={{ textAlign: 'center' }}>
          <h3>Skills:</h3>
          <SkillBadge skill="React" level="Expert" />
          <SkillBadge skill="JavaScript" level="Expert" />
          <SkillBadge skill="CSS" level="Intermediate" />
        </div>
      </ProfileCard>
    </div>
  );
}

export default App;
