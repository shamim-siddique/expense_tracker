import React from 'react'
import { Calendar, Tag, DollarSign, FileText, Repeat, ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import useExpenseTrackerStore from '../../store/expenseTracker';

const ExpenseDetail = () => {
  const {id} = useParams();
  const {expenses} = useExpenseTrackerStore();
  const expense = expenses.find((expense) => expense.id === Number(id));

  if(!expense){
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center max-w-2xl mx-auto">
        <h1 className="text-xl font-bold text-gray-900 mb-2">Expense Not Found</h1>
        <p className="text-gray-500 text-sm">The expense you are looking for does not exist.</p>
      </div>
    )
  }
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <Link
        to="/expenses"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Expenses
      </Link>

      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Tag className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">{expense.category}</h2>
            <div className="flex items-center gap-2 mt-1">
              {expense.recurring && (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  <Repeat className="w-3 h-3" />
                  Recurring
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="text-3xl font-extrabold text-gray-900 flex items-center gap-1">
          <DollarSign className="w-7 h-7 text-indigo-600" />
          {expense.amount}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
          <Calendar className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Date</p>
            <p className="text-sm font-semibold text-gray-900">
              {new Date(expense.date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
          <DollarSign className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Amount</p>
            <p className="text-sm font-semibold text-gray-900">{expense.amount}</p>
          </div>
        </div>
      </div>

      {expense.note && (
        <div className="p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-4 h-4 text-gray-400" />
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Note</p>
          </div>
          <p className="text-sm text-gray-800 leading-relaxed">{expense.note}</p>
        </div>
      )}
    </div>
  )
}

export default ExpenseDetail