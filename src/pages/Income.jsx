import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const Income = () => {
  const { transactionList } = useContext(FinanceContext);
  const incomes = transactionList.filter((t) => t.type === "income");
  const totalIncome = incomes.reduce((sum, t) => sum + Number(t.amount), 0);

  return (
    <div className="page-wrapper">
      <h2 className="page-title">Lista przychodów</h2>
      <p className="page-total">Suma przychodów: {totalIncome.toFixed(2)} zł</p>

      <div className="transaction-form">
        <TransactionForm defaultType="income" />
      </div>
      <TransactionList transactions={incomes} />
    </div>
  );
};

export default Income;
