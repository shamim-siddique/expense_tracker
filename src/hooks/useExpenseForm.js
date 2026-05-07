import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useExpenseForm = (Schema,defaultValues={}) => {
    return (
        useForm({
            resolver: zodResolver(Schema),
            defaultValues
        }
        )
    );
}
