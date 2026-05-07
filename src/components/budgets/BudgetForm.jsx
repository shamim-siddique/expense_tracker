import React from 'react'
import { useExpenseForm } from '../../hooks/useExpenseForm'
import { budgetSchema } from '../../schemas/budgetSchema'
import { Tag, DollarSign, PlusCircle } from 'lucide-react'

const BudgetForm = ({onsubmit}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useExpenseForm(budgetSchema)

    const handleData = (data)=>{
        onsubmit(data)
    }
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Create Budget</h2>
            <form onSubmit={handleSubmit(handleData)} className="space-y-5">
                <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <Tag className="w-4 h-4 text-indigo-500" />
                        Category
                    </label>
                    <input
                        type="text"
                        placeholder='e.g. Food, Travel, Shopping'
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        {...register('category', { required: true })}
                    />
                    {errors.category && <p className="text-xs text-rose-500 mt-1.5">{errors.category.message}</p>}
                </div>

                <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <DollarSign className="w-4 h-4 text-indigo-500" />
                        Monthly Limit
                    </label>
                    <input
                        type="number"
                        placeholder='Enter monthly limit'
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        {...register("monthlyLimit", { required: true, valueAsNumber:true })}
                    />
                    {errors.monthlyLimit && <p className="text-xs text-rose-500 mt-1.5">{errors.monthlyLimit.message}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
                >
                    <PlusCircle className="w-5 h-5" />
                    Add Budget
                </button>
            </form>
        </div>
    )
}

export default BudgetForm