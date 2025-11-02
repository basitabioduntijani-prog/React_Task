import React from 'react';

function ExpenseStats({ expenses, income, budget }) {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const highest = Math.max(...expenses.map(exp => exp.amount), 0);
  const incomeTotal = income.reduce((sum, i) => sum + i.amount, 0);
  const balance = incomeTotal - total;
  const warning = budget && total > 0.8 * budget;
  const remaining = budget - total;

  return (
    <div className="card">
      <h4>Statistics</h4>
      <p>Total Spent: ₦{total.toLocaleString()}</p>
      <p>Number of Expenses: {expenses.length}</p>
      <p>Highest Expense: ₦{highest.toLocaleString()}</p>
      <p>Total Income: ₦{incomeTotal.toLocaleString()}</p>
      <p>Balance: ₦{balance.toLocaleString()}</p>
      {budget > 0 && (
        <>
          <p>Budget: ₦{budget.toLocaleString()}</p>
          <p>Remaining: ₦{remaining.toLocaleString()}</p>
          {warning && <p style={{ color: 'red' }}>⚠️ You've spent over 80% of your budget!</p>}
        </>
      )}
    </div>
  );
}

export default ExpenseStats;
