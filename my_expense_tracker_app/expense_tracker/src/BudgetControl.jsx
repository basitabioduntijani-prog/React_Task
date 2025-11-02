function BudgetControl({ budget, setBudget, expenses }) {
  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const warning = totalSpent > 0.8 * budget;

  return (
    <div className="budget-control">
      <input
        type="number"
        placeholder="Set Monthly Budget (₦)"
        value={budget}
        onChange={e => setBudget(parseFloat(e.target.value))}
      />
      <p>Remaining: ₦{(budget - totalSpent).toLocaleString()}</p>
      {warning && <p className="warning">⚠️ You've spent over 80% of your budget!</p>}
    </div>
  );
}
