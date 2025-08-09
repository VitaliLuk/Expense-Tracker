const TransactionList = ({ transactions, onEdit }) => {
  return (
    <ul className="transaction-list">
      {transactions.map((t) => (
        <li key={t.id} className="transaction-item">
          <span className="transaction-details">
            {t.name} - {t.amount} zł (
            {t.type === "income" ? "Przychód" : "Wydatek"}, {t.date})
          </span>
          {onEdit && (
            <button onClick={() => onEdit(t)} className="edit-button">
              Edytuj
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
