import { createBrowserRouter } from "react-router-dom";
import ExpensePage from "../pages/ExpensePage";
import App from "../App";
import EditExpensePage from "../pages/EditExpensePage";
import HomePage from "../pages/HomePage";
import { ExpenseForm } from "../components/expenses/ExpenseForm";
import ExpenseDetail from "../components/expenses/ExpenseDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/expenses",
                element: <ExpensePage />
            },
            {
                path:"/expenses/new",
                element:<ExpenseForm/>
            },
              {
                path:"/expenses/edit/:id",
                element:<EditExpensePage/>
            },
            {
                path: "/expenses/:id",
                element: <ExpenseDetail />
            },
        ]
    }
])