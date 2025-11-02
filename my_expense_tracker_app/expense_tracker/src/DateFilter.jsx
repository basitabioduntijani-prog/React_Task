import React from 'react';

function DateFilter({ startDate, endDate, setStartDate, setEndDate }) {
  return (
    <div className="date-filter">
      <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
      <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
    </div>
  );
}

export default DateFilter;
