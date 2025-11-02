import React, { useState } from 'react';

function AddIncomeForm({ onAdd }) {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!source || amount <= 0) return alert('Enter valid source and amount');
    onAdd({ source, amount: parseFloat(amount) });
    setSource('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Income Source" value={source} onChange={e => setSource(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <button type="submit">Add Income</button>
    </form>
  );
}

export default AddIncomeForm;
