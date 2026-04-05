// Mock in-memory DB so it doesn't require MongoDB running locally
let transactions = [
  { id: '1', date: '2026-04-01', amount: 5000, category: 'Salary', type: 'income' },
  { id: '2', date: '2026-04-02', amount: 150, category: 'Food', type: 'expense' },
  { id: '3', date: '2026-04-02', amount: 50, category: 'Transport', type: 'expense' },
  { id: '4', date: '2026-04-03', amount: 200, category: 'Entertainment', type: 'expense' }
];

export const getTransactions = (req, res) => {
  res.status(200).json(transactions);
};

export const addTransaction = (req, res) => {
  const { date, amount, category, type } = req.body;
  if (!date || !amount || !category || !type) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  const newTransaction = {
    id: Date.now().toString(),
    date,
    amount: Number(amount),
    category,
    type
  };

  transactions.push(newTransaction);
  res.status(201).json(newTransaction);
};

export const deleteTransaction = (req, res) => {
  const { id } = req.params;
  transactions = transactions.filter(t => t.id !== id);
  res.status(200).json({ message: 'Transaction removed' });
};
