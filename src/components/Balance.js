import React, { useContext, useEffect, useState } from 'react';
import { TransactionsContext } from '../context/GlobalContext';

export const Balance = () => {
  const { transactions } = useContext(TransactionsContext);
  const listAmount = transactions.map(transaction => transaction.amount)
  const total = listAmount.reduce((abs, cur) => (abs + cur), 0);

  return (
    <>
      <div className='balance'>
        <p className='label'>Your balance</p>
        <p className=' price'>${total}</p>
      </div>
    </>
  );
};
