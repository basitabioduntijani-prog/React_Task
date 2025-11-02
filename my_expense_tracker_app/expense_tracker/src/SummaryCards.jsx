import React from 'react';

function SummaryCards({ expenses }) {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const breakdown = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  return (
    <div className="summary-cards">
      {Object.entries(breakdown).map(([cat, amt]) => {
        const percent = ((amt / total) * 100).toFixed(1);
        return (
          <div key={cat} className="card">
            <h4>{cat}</h4>
            <p>₦{amt.toLocaleString()}</p>
            <p>{percent}% of total</p>
          </div>
        );
      })}
    </div>
  );
}

export default SummaryCards;
