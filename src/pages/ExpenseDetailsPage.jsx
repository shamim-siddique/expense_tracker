import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import ExpenseDetail from '../components/expenses/ExpenseDetail'

const ExpenseDetailsPage = () => {
  const {id} = useParams()
  const {expenses} = useOutletContext()
  const data = expenses.find((e) => e.id === Number(id))

  if (!data) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center max-w-2xl mx-auto">
        <h1 className="text-xl font-bold text-gray-900 mb-2">Expense not found</h1>
        <p className="text-gray-500 text-sm">The expense you are looking for does not exist.</p>
      </div>
    )
  }

  return (
    <ExpenseDetail
      expense={data}
    />
  )
}

export default ExpenseDetailsPage