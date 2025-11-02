import React, { useState } from 'react';
import Header from './Header';
import AddExpenseForm from './AddExpenseForm';
import AddIncomeForm from './AddIncomeForm';
import BudgetSetter from './BudgetSetter';
import CategoryFilter from './CategoryFilter';
import DateFilter from './DateFilter';
import ExpenseStats from './ExpenseStats';
import SummaryCards from './SummaryCards';
import ExpenseList from './ExpenseList';
import './styles/ExpenseTracker.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [budget, setBudget] = useState(0);
  const [filter, setFilter] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now(), date: new Date().toISOString().split('T')[0] }]);
  };

  const addIncome = (entry) => {
    setIncome([...income, { ...entry, id: Date.now(), date: new Date().toISOString().split('T')[0] }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const editExpense = (id, updatedFields) => {
    setExpenses(expenses.map(exp => exp.id === id ? { ...exp, ...updatedFields } : exp));
  };

  const filteredExpenses = expenses.filter(exp => {
    const matchesCategory = filter === 'All' || exp.category === filter;
    const date = new Date(exp.date);
    const afterStart = !startDate || date >= new Date(startDate);
    const beforeEnd = !endDate || date <= new Date(endDate);
    return matchesCategory && afterStart && beforeEnd;
  });

  const exportData = () => {
    console.log('Expenses:', JSON.stringify(expenses, null, 2));
    console.log('Income:', JSON.stringify(income, null, 2));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="top-panel">
        <div className="budget-income">
          <BudgetSetter budget={budget} setBudget={setBudget} />
          <AddIncomeForm onAdd={addIncome} />
        </div>
        <AddExpenseForm onAdd={addExpense} />
      </div>
      <div className="filters">
        <CategoryFilter selected={filter} onSelect={setFilter} />
        <DateFilter startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
      </div>
      <div className="stats-summary">
        <ExpenseStats expenses={filteredExpenses} income={income} budget={budget} />
        <SummaryCards expenses={filteredExpenses} />
      </div>
      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} onEdit={editExpense} />
      <footer>
        <button className="export-btn" onClick={exportData}>Export to Console</button>
      </footer>
    </div>
  );
}

export default App;
