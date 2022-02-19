import React, { useContext, useState } from 'react';
import { TransactionsContext } from '../context/GlobalContext';

export const AddNewTransaction = () => {
  const { addTransaction } = useContext(TransactionsContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const addNewTransaction = (e) => {
    e.preventDefault();
    if (!text && amount === 0) return;

    let newTransaction = { text, amount: +amount }
    addTransaction(newTransaction)
    
    setText('')
    setAmount(0)
  }

  return (
    <form onSubmit={addNewTransaction}>
      <h3>Add new transaction</h3>
      <div className='field'>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <label>Enter text</label>
      </div>
      <div className='field'>
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        <label>Enter amount</label>
      </div>
      <button>Save</button>
    </form>
  );
};
