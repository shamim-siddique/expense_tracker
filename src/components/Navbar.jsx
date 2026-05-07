import React from 'react'
import { Link } from 'react-router-dom'
import { LayoutDashboard, PlusCircle, List, Wallet } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
            <Wallet className="w-7 h-7" />
            <span>SpendWise</span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-3">
            <Link
              to="/expenses"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors text-sm font-medium"
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">All Expenses</span>
            </Link>
            <Link
              to="/expenses/new"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors text-sm font-medium"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Add Expense</span>
            </Link>
            <Link
              to="/budget"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors text-sm font-medium"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span className="hidden sm:inline">Budget</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
