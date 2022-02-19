import React, { useContext } from 'react';
import { TransactionsContext } from '../context/GlobalContext';

export const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useContext(TransactionsContext)
  const sign = transaction.amount > 0 ? "" : "-";

  return (
    <div className={'item ' + (transaction.amount > 0 ? 'income' : 'expense')} >
      <h4>{transaction.text}</h4>
      <p>{transaction.date || 'There\'s no date'}</p>
      <strong>{sign} ${Math.abs(transaction.amount)}</strong>
      <span className='item-delete' onClick={() => deleteTransaction(transaction.id)}>delete</span>
    </div>
  );
};
