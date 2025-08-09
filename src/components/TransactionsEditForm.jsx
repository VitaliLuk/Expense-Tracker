import { useState, useEffect, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const TransactionEditForm = ({ editTarget, onSave, onCancel }) => {
  const { deleteTransaction } = useContext(FinanceContext);

  const [name, setName] = useState(editTarget.name);
  const [amount, setAmount] = useState(editTarget.amount);
  const [type, setType] = useState(editTarget.type);
  const [date, setDate] = useState(editTarget.date);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    setName(editTarget.name);
    setAmount(editTarget.amount);
    setType(editTarget.type);
    setDate(editTarget.date);
  }, [editTarget]);

  const isValid = () => {
    return name.trim() !== "" && !isNaN(amount) && parseFloat(amount) > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid()) return;

    const updated = {
      ...editTarget,
      name: name.trim(),
      amount: parseFloat(amount),
      type,
      date,
    };
    onSave(updated);
  };

  const handleDelete = () => {
    deleteTransaction(editTarget.id);
    setShowDeleteConfirm(false);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form edit-form">
      <h3>Edycja transakcji</h3>

      <div className="transaction-form-group">
        <label>Nazwa:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="transaction-form-group">
        <label>Kwota:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          min="0.01"
          step="0.01"
        />
      </div>

      <div className="transaction-form-group">
        <label>Typ:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Przychód</option>
          <option value="expense">Wydatek</option>
        </select>
      </div>

      <div className="transaction-form-group">
        <label>Data:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="transaction-buttons">
        <button type="submit" disabled={!isValid()}>
          Zapisz
        </button>
        <button type="button" onClick={onCancel}>
          Anuluj
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={() => setShowDeleteConfirm(true)}
        >
          Usuń
        </button>
      </div>
      
      {showDeleteConfirm && (
        <div className="delete-confirm-overlay">
          <div className="delete-confirm-box">
            <p>Czy na pewno chcesz usunąć tę transakcję?</p>
            <div className="delete-confirm-buttons">
              <button className="confirm-btn" onClick={handleDelete}>
                Tak, usuń
              </button>
              <button
                className="cancel-btn"
                onClick={() => setShowDeleteConfirm(false)}
              >
                Anuluj
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default TransactionEditForm;

