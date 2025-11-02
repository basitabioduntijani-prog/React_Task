import React, { useState } from 'react';

function ExpenseItem({ expense, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [desc, setDesc] = useState(expense.description);
  const [amt, setAmt] = useState(expense.amount);

  const handleSave = () => {
    onEdit(expense.id, { description: desc, amount: parseFloat(amt) });
    setIsEditing(false);
  };

  return (
    <div className={`expense-item ${expense.category.toLowerCase()}`}>
      {isEditing ? (
        <>
          <input value={desc} onChange={e => setDesc(e.target.value)} />
          <input type="number" value={amt} onChange={e => setAmt(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>{expense.description}</p>
          <p>₦{expense.amount.toLocaleString()}</p>
          <p>{expense.category}</p>
          <p>{expense.date}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(expense.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default ExpenseItem;
