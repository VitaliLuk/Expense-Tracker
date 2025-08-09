import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

const Expense = () => {
  const { transactionList } = useContext(FinanceContext);

  const expenses = transactionList.filter((t) => t.type === "expense");

  const totalExpense = expenses.reduce((sum, t) => sum + Number(t.amount), 0);

  return (
  <div className="page-wrapper expense-page">
    <h2 className="page-title">Lista wydatków</h2>
    <p className="page-total">Suma wydatków: {totalExpense.toFixed(2)} zł</p>

    <div className="transaction-form">
      <TransactionForm defaultType="expense" />
    </div>

    <TransactionList transactions={expenses} />
  </div>
);
};

export default Expense;
