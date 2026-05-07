import React from 'react'
import ExpenseList from '../components/expenses/ExpenseList'
import { useOutletContext, Link } from 'react-router-dom'
import { Receipt, PlusCircle } from 'lucide-react'

const ExpensePage = () => {
  const { expenses, deleteExpense } = useOutletContext()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
            <Receipt className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Expenses</h1>
            <p className="text-sm text-gray-500">{expenses.length} total</p>
          </div>
        </div>
        <Link
          to="/expenses/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-sm text-sm"
        >
          <PlusCircle className="w-4 h-4" />
          Add Expense
        </Link>
      </div>
      <ExpenseList
        expenses={expenses}
        onDelete={deleteExpense}
      />
    </div>
  )
}

export default ExpensePage