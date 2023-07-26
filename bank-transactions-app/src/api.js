// src/api.js

const BASE_URL = 'http://localhost:8001';

export const fetchTransactions = async () => {
  try {
    const response = await fetch(`${BASE_URL}/transactions`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data.transactions;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
};
