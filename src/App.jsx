import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { getFromLocalStorage, saveToLocalStorage } from './hooks/useLocalStorage'
import Navbar from './components/Navbar'

const App = () => {
    const [expenses, setExpenses] = useState(() => getFromLocalStorage("expenses"))

    const addExpense = (data) => {
        setExpenses(prev => [{ id: Date.now(), ...data }, ...prev])
    }

    const updateExpense = (id, data) => {
        setExpenses(prev => {
            const updated = prev.map((e) => e.id === id ? { ...e, ...data } : e)
            return updated
        })
    }

    const deleteExpense = (id) => {
        setExpenses(prev => prev.filter((e) => e.id !== id))
    }

    useEffect(() => {
        saveToLocalStorage("expenses", expenses)
    }, [expenses])

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet context={{ expenses, addExpense, updateExpense, deleteExpense }} />
            </main>
        </div>
    )
}

export default App