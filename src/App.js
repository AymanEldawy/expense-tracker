import React from 'react';
import { AddNewTransaction } from './components/AddNewTransaction';
import { Incomes } from './components/Incomes';
import { Balance } from './components/Balance';
import { TransactionList } from './components/TransactionList';
import { TransactionsProvider } from './context/GlobalContext';
export default function App() {

  return (
      <TransactionsProvider>
        <div className='container'>
          <h1>Expense Track</h1>
          <div className='flex'>
            <Balance />
            <Incomes />
          </div>
          <div className='flex'>
            <AddNewTransaction />
            <TransactionList />
          </div>
        </div>
      </TransactionsProvider>
  );
}
