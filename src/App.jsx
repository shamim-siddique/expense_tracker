import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { getFromLocalStorage, saveToLocalStorage } from './hooks/useLocalStorage'
import Navbar from './components/Navbar'

const App = () => {

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
        </div>
    )
}

export default App