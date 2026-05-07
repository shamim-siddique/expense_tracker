import { useOutletContext, useParams } from 'react-router-dom'
import { ExpenseForm } from '../components/expenses/ExpenseForm'

const EditExpensePage = () => {

  const { expenses, updateExpense } =
    useOutletContext()

  const { id } = useParams()

  const expense = expenses.find(
    (e) => e.id === Number(id)
  )

  if (!expense) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center max-w-2xl mx-auto">
        <h1 className="text-xl font-bold text-gray-900 mb-2">Expense Not Found</h1>
        <p className="text-gray-500 text-sm">The expense you are looking for does not exist.</p>
      </div>
    )
  }

  const formDefaults = {
    ...expense,
    date: new Date(expense.date)
      .toISOString()
      .split("T")[0]
  }

  return (
    <ExpenseForm
      Id={id}
      update={updateExpense}
      defaultValues={formDefaults}
    />
  )
}

export default EditExpensePage