import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

import { uuid } from 'uuidv4';

// initial state
const initialState = {
  transactions: [
    { id: 1, text: 'Books', amount: -125 },
    { id: 2, text: 'Netflix subscription', amount: -224 },
    { id: 3, text: 'Gift', amount: 520 },
    { id: 4, text: 'something', amount: 325 },
  ]
}
export const TransactionsContext = createContext(initialState);

export const TransactionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: { id: uuid(), text: transaction.text, amount: transaction.amount, date: new Date().toLocaleDateString() }
    })
  }

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }


  return (
    <TransactionsContext.Provider value={{ transactions: state.transactions, addTransaction, deleteTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}



