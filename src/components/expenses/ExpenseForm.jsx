import { useNavigate } from 'react-router-dom';
import { useExpenseForm } from '../../hooks/useExpenseForm';
import { expenseSchema } from '../../schemas/expenseSchema';
import { DollarSign, Tag, Calendar, FileText, Repeat, ArrowLeft, Save } from 'lucide-react';

export const ExpenseForm = ({onsubmit,Id,update,defaultValues}) => {
    const navigate =useNavigate()
    const { register, handleSubmit, formState: { errors } } = useExpenseForm(
        expenseSchema,
        defaultValues
    )

    const handleData = (data)=>{
        if(Id){
            update(Number(Id),data)
        }else{
            onsubmit(data)
        }
        navigate("/expenses")
    }
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 max-w-2xl mx-auto">
            <button
                onClick={() => navigate("/expenses")}
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors mb-6"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Expenses
            </button>

            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                {Id ? "Update Expense" : "Add Expense"}
            </h2>

            <form onSubmit={handleSubmit(handleData)} className="space-y-5">
                <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <DollarSign className="w-4 h-4 text-indigo-500" />
                        Amount
                    </label>
                    <input
                        type="number"
                        placeholder='Enter amount'
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        {...register("amount", { valueAsNumber: true })}
                    />
                    {errors.amount && <p className="text-xs text-rose-500 mt-1.5">{errors.amount.message}</p>}
                </div>

                <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <Tag className="w-4 h-4 text-indigo-500" />
                        Category
                    </label>
                    <input
                        type="text"
                        placeholder='e.g. Food, Travel, Shopping'
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        {...register("category", {required:true})}
                    />
                    {errors.category && <p className="text-xs text-rose-500 mt-1.5">{errors.category.message}</p>}
                </div>

                <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <Calendar className="w-4 h-4 text-indigo-500" />
                        Date
                    </label>
                    <input
                        type="date"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        {...register("date", {required:true})}
                    />
                    {errors.date && <p className="text-xs text-rose-500 mt-1.5">{errors.date.message}</p>}
                </div>

                <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <FileText className="w-4 h-4 text-indigo-500" />
                        Note
                    </label>
                    <input
                        type="text"
                        placeholder='Optional note'
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        {...register("note")}
                    />
                </div>

                <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                    <Repeat className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm font-medium text-gray-700">This is a recurring expense</span>
                    <input
                        type="checkbox"
                        className="ml-auto w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        {...register("recurring")}
                    />
                </label>

                <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
                >
                    <Save className="w-5 h-5" />
                    {Id ? "Update Expense" : "Add Expense"}
                </button>
            </form>
        </div>
    )
}