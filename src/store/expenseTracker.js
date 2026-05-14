import {create} from 'zustand';
import { persist } from 'zustand/middleware';

const useExpenseTrackerStore = create(
  persist(
    (set) => ({
      expenses: [],
      addExpense: (expense) =>
        set((state) => ({ expenses: [{id:Date.now(), ...expense},...state.expenses] })),
      removeExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((expense) => expense.id !== id),
        })),
      updateExpense: (id, newExpense) =>
        set((state) => ({
          expenses: state.expenses.map((expense) =>
            expense.id === id ? { ...expense, ...newExpense } : expense
          ),
        })),
    }),
    {
      name: 'expense-tracker-storage'
    }
  )
);

export default useExpenseTrackerStore;