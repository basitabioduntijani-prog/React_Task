import React from 'react';

function Header() {
  const today = new Date().toDateString();
  return (
    <header className="panel">
      <h1>Tijjbbas Expense Tracker</h1>
      <p>{today}</p>
    </header>
  );
}

export default Header;
