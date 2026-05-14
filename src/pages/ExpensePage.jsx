import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Receipt, PlusCircle } from 'lucide-react'
import useExpenseTrackerStore from '../store/expenseTracker';
import ExpenseCard from '../components/expenses/ExpenseCard';
import useDebounce from '../hooks/useDebounce';

const ExpensePage = () => {
  const {expenses,removeExpense} = useExpenseTrackerStore();
  const [search, setSearch] = useState('')
  const [selectcategory, setSelectCategory] = useState("");
  const categories = [...new Set(expenses.map(expense => expense.category))];
  const debounceSearch = useDebounce(search,300)
  const filteredExpenses = expenses.filter((expense) => {
    const matchesCategory = !selectcategory || expense.category === selectcategory;

    const searchAbleText = `
    ${expense.category}
    ${expense.amount}
    ${expense.note}
    ${expense.tags?.join(" ")}
    `.toLowerCase()

    const matchesSearch = searchAbleText.includes(debounceSearch.toLowerCase().trim());

    return matchesCategory && matchesSearch;
  })

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
        <input type="text" className='px-3 py-2' name='search' placeholder="Search expenses..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <select
          name="category"
          id="category"
          className="px-4 py-2.5 border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          value={selectcategory}
          onChange={(e) => setSelectCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <Link
          to="/expenses/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-sm text-sm"
        >
          <PlusCircle className="w-4 h-4" />
          Add Expense
        </Link>
      </div>
      {
        filteredExpenses.length !== 0 ? (
          <div className="space-y-4">
            {filteredExpenses.map((expense) => (
              <ExpenseCard
                key={expense.id}
                expense={expense}
                onDelete={removeExpense}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 text-gray-400 mb-4">
              <Receipt className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">No expenses found</h3>
            <p className="text-gray-500 text-sm">Start tracking by adding your first expense.</p>
          </div>
        )
      }
    </div>
  )
}

export default ExpensePage