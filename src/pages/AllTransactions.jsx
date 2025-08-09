import { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";
import TransactionEditForm from "../components/TransactionsEditForm";
import TransactionList from "../components/TransactionList";

const AllTransactions = () => {
  const { transactionList, editTransaction } = useContext(FinanceContext);
  const [editTarget, setEditTarget] = useState(null);

  const handleSave = (updatedTransaction) => {
    editTransaction(updatedTransaction);
    setEditTarget(null);
  };

  const handleCancel = () => {
    setEditTarget(null);
  };

  return (
    <div className="page-wrapper edit-page-wrapper">
      <h2 className="edit-page-title">Edytuj transakcję</h2>

      {editTarget && (
        <TransactionEditForm
          editTarget={editTarget}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}

      <TransactionList transactions={transactionList} onEdit={setEditTarget} />
    </div>
  );
};

export default AllTransactions;
