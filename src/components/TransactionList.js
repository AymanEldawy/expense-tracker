import React, { useContext, useEffect } from 'react';
import { TransactionItem } from './TransactionItem';
import { TransactionsContext } from '../context/GlobalContext';


export const TransactionList = () => {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div className='transactions'>
      <h2>Transaction Recent</h2>
      {transactions.length > 0 ? transactions.map(transaction => {
        return (<TransactionItem key={transaction.id} transaction={transaction} />)
      }) : (<p className='empty'>There's no transactions !</p>)}
    </div>
  );
}
