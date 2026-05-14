import React from 'react'
import { Link } from 'react-router-dom'
import { Eye, Pencil, Trash2, Calendar, Tag, DollarSign, Repeat } from 'lucide-react'

const ExpenseCard = ({ expense, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Tag className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{expense.category}</h3>
            <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
              <Calendar className="w-3 h-3" />
              <span>
                {new Date(expense.date).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {expense.recurring && (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              <Repeat className="w-3 h-3" />
              Recurring
            </span>
          )}
          <span className="text-lg font-extrabold text-gray-900 flex items-center gap-1">
            <DollarSign className="w-4 h-4 text-indigo-600" />
            {expense.amount}
          </span>
        </div>
      </div>

      {expense.note && (
        <p className="text-sm text-gray-500 mb-4 leading-relaxed">{expense.note}</p>
      )}

      <div className="flex items-center gap-2 pt-4 border-t border-gray-50">
        <Link
          to={`/expenses/${expense.id}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
        >
          <Eye className="w-4 h-4" />
          View
        </Link>
        <Link
          to={`/expenses/edit/${expense.id}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-amber-600 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
        >
          <Pencil className="w-4 h-4" />
          Edit
        </Link>
        {expense.tags && expense.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {expense.tags.map((tag, index) => (
              <span key={index} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-amber-600 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <button
          onClick={() => onDelete(expense.id)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-rose-600 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors ml-auto"
        >
          <Trash2 className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  )
}

export default ExpenseCard