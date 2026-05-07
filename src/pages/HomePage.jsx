import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Receipt, PiggyBank, TrendingUp, ShieldCheck } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 mb-6">
          <TrendingUp className="w-7 h-7" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Take Control of Your Expenses
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
          Track every penny, set smart budgets, and make informed financial decisions.
          Our simple yet powerful expense tracker helps you understand where your money goes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/expenses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <Receipt className="w-5 h-5" />
            Explore Expenses
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/budget"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
          >
            <PiggyBank className="w-5 h-5" />
            Explore Budgets
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
            <Receipt className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Track Expenses</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Log daily spending with categories, amounts, and notes. Stay organized effortlessly.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
            <PiggyBank className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Set Budgets</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Create monthly limits per category and keep your spending within healthy boundaries.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Local & Secure</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            All your data stays in your browser. No accounts, no cloud, total privacy.
          </p>
        </div>
      </section>
    </div>
  )
}

export default HomePage
