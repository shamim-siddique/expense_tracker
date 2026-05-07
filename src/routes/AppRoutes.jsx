import { createBrowserRouter } from "react-router-dom";
import ExpensePage from "../pages/ExpensePage";
import ExpenseDetailsPage from "../pages/ExpenseDetailsPage";
import BudgetsPage from "../pages/BudgetsPage";
import App from "../App";
import CreateExpensePage from "../pages/CreateExpensePage";
import EditExpensePage from "../pages/EditExpensePage";
import HomePage from "../pages/HomePage";

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
                element:<CreateExpensePage/>
            },
              {
                path:"/expenses/edit/:id",
                element:<EditExpensePage/>
            },
            {
                path: "/expenses/:id",
                element: <ExpenseDetailsPage />
            },
            {
                path: "/budget",
                element: <BudgetsPage />
            }
        ]
    }
])