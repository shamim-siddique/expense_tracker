import React from 'react'
import { ExpenseForm } from '../components/expenses/ExpenseForm'
import { useOutletContext } from 'react-router-dom'

const CreateExpensePage = () => {
  const {addExpense} = useOutletContext()
  return (
    <ExpenseForm
      onsubmit={addExpense}
    />
  )
}

export default CreateExpensePage