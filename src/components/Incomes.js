import React, { useContext, useEffect, useState } from 'react';
import { TransactionsContext } from '../context/GlobalContext';

export const Incomes = () => {
  const { transactions } = useContext(TransactionsContext);
  let listIncomes = [];
  let listExpense = [];

  transactions.forEach(transaction => {
    if (transaction.amount > 0)
      listIncomes.push(transaction.amount);
    else
      listExpense.push(transaction.amount);
  })

  const incomes = listIncomes.reduce((abs, cur) => (abs += cur), 0).toFixed(2);
  const expense = listExpense.reduce((abs, cur) => (abs += cur), 0).toFixed(2);

  return (
    <div className='transaction'>
      <div className='incomes'>
        <p className='subtitle'>Incomes</p>
        <p className='price'>${incomes}</p>
      </div>
      <div className='expenses'>
        <p className='subtitle'>Expenses</p>
        <p className='price'>${expense}</p>
      </div>
    </div>);
};
