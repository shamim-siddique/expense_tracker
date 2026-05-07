import {z} from 'zod';

export const expenseSchema = z.object({
    amount: z.number().positive().min(1, 'Amount must be greater than 0'),
    category: z.string().min(1, 'Category is required'),
    date: z.coerce.date(),
    note: z.string().optional(),
    recurring: z.boolean().optional(),
});