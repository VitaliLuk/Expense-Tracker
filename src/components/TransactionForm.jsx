import { useState, useEffect, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const TransactionForm = ({
  defaultType = null,
  editTarget = null,
  onSave,
  onCancel,
}) => {
  const { addTransaction } = useContext(FinanceContext);

  const getTodayDate = () => new Date().toISOString().split("T")[0];

  const [name, setName] = useState(editTarget?.name || "");
  const [amount, setAmount] = useState(editTarget?.amount || "");
  const [type, setType] = useState(editTarget?.type || defaultType || "income");
  const [date, setDate] = useState(editTarget?.date || getTodayDate());
  const [error, setError] = useState("");

  useEffect(() => {
    if (editTarget) {
      setName(editTarget.name);
      setAmount(editTarget.amount);
      setType(editTarget.type);
      setDate(editTarget.date);
    }
  }, [editTarget]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || isNaN(amount) || parseFloat(amount) <= 0) {
      setError("Podaj poprawną nazwę i dodatnią kwotę.");
      return;
    }

    const transaction = {
      id: editTarget ? editTarget.id : Date.now(),
      name: name.trim(),
      amount: parseFloat(amount),
      type,
      date,
    };

    if (onSave) {
      onSave(transaction);
    } else {
      addTransaction(transaction);
    }

    setName("");
    setAmount("");
    setType(defaultType || "income");
    setDate(getTodayDate());
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`transaction-form ${
        type === "income" ? "form-income" : "form-expense"
      }`}
    >
      <h3>{editTarget ? "Edytuj transakcję" : "Dodaj transakcję"}</h3>

      <div>
        <label>Nazwa:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Kwota:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      {!defaultType && (
        <div>
          <label>Typ:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Przychód</option>
            <option value="expense">Wydatek</option>
          </select>
        </div>
      )}

      <div>
        <label>Data:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <button type="submit">{editTarget ? "Zapisz" : "Dodaj"}</button>

      {onCancel && (
        <button type="button" onClick={onCancel}>
          Anuluj
        </button>
      )}
    </form>
  );
};

export default TransactionForm;
