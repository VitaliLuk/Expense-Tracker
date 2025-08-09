import { createRoot } from "react-dom/client";
import App from "./App";
import { FinanceProvider } from "./context/FinanceContext";
import { UserProvider } from "./context/UserContext";
import './styles/Home.css';
import './styles/Login.css';
import './styles/Income-expense.css';
import './styles/Transaction.css';
import './styles/AllTransactions.css';
import './styles/Navbar.css';
import './styles/TransactionForm.css';


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <UserProvider>
    <FinanceProvider>
      <App />
    </FinanceProvider>
  </UserProvider>
);
