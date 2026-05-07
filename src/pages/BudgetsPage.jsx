import React, { useEffect, useState } from 'react'
import BudgetList from '../components/budgets/BudgetList'
import BudgetForm from '../components/budgets/BudgetForm'
import { getFromLocalStorage, saveToLocalStorage } from '../hooks/useLocalStorage'
import { PiggyBank } from 'lucide-react'

const BudgetsPage = () => {
    const [budgets, setBudgets] = useState(getFromLocalStorage("budget"))

    const addBudgets = (data) => {
        setBudgets(prev => [{ id: Date.now(), ...data }, ...prev])
    }

    const deleteBudget = (id) => [
        setBudgets(prev => prev.filter((b) => b.id !== id))
    ]

    useEffect(() => {
        saveToLocalStorage("budget", budgets)
    }, [budgets])
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                    <PiggyBank className="w-5 h-5" />
                </div>
                <div>
                    <h1 className="text-2xl font-extrabold text-gray-900">Budgets</h1>
                    <p className="text-sm text-gray-500">{budgets.length} categories</p>
                </div>
            </div>
            <BudgetForm
                onsubmit={addBudgets}
            />
            <BudgetList
                budgets={budgets}
                onDelete={deleteBudget}
            />
        </div>
    )
}

export default BudgetsPage