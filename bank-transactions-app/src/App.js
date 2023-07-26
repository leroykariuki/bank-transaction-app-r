// src/App.js

import React, { useState, useEffect } from 'react';
import { fetchTransactions } from './api';
import TransactionTable from './TransactionTable';
import SearchBar from './SearchBar';
import AddTransactionForm from './TransactionForm';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTransactions();
      setTransactions(data);
      setFilteredTransactions(data);
    };
    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
    // Optionally, you can send the newTransaction to the backend API here (Bonus Deliverables).
  };

  return (
    <div>
      <h1>Bank Transactions</h1>
      <SearchBar onSearch={handleSearch} />
      <TransactionTable transactions={filteredTransactions} />
      <AddTransactionForm onSubmit={handleAddTransaction} />
    </div>
  );
};

export default App;
