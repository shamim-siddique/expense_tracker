import React from 'react'
import { Tag, Trash2, PiggyBank } from 'lucide-react'

const BudgetList = ({budgets,onDelete}) => {
  return (
    <div className="space-y-4">
        {
            budgets.length !== 0 ? budgets.map((budget)=>(
              <div
                key={budget.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Tag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{budget.category}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <PiggyBank className="w-3.5 h-3.5" />
                      Monthly Limit: <span className="font-semibold text-gray-700">{budget.monthlyLimit}</span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={()=>onDelete(budget.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-rose-600 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            )) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 text-gray-400 mb-4">
                  <PiggyBank className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">No budgets found</h3>
                <p className="text-gray-500 text-sm">Set your first budget to start managing spending limits.</p>
              </div>
            )
        }
    </div>
  )
}

export default BudgetList