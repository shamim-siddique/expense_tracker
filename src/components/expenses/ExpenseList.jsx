import React from 'react'
import ExpenseCard from './ExpenseCard'
import { Receipt } from 'lucide-react'

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <div className="space-y-4">
      {expenses.length !== 0 ? (expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          expense={expense}
          onDelete={onDelete}
        />)
      ))
        : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 text-gray-400 mb-4">
              <Receipt className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">No expenses found</h3>
            <p className="text-gray-500 text-sm">Start tracking by adding your first expense.</p>
          </div>
        )}
    </div>
  )
}

export default ExpenseList