import React from 'react';

function BudgetSetter({ budget, setBudget }) {
  return (
    <form>
      <input
        type="number"
        placeholder="Monthly Budget"
        value={budget}
        onChange={e => setBudget(parseFloat(e.target.value))}
      />
    </form>
  );
}

export default BudgetSetter;
