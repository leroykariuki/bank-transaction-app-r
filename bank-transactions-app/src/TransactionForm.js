// src/TransactionForm.js

import React, { useState } from 'react';

const AddTransactionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset the form after submission 
    setFormData({ date: '', description: '', category: '', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="date" placeholder="Date" value={formData.date} onChange={handleChange} />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input type="text" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
