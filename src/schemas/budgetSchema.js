import {z} from 'zod';

export const budgetSchema = z.object({
    category: z.string().min(1, 'Category is required'),
    monthlyLimit: z.number().positive().min(1, 'Monthly limit must be greater than 0'),
});