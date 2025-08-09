import { useState, useEffect, createContext } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactionList, setTransactionList] = useState(() => {
    const stored = localStorage.getItem("transactions");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactionList));
  }, [transactionList]);

  const addTransaction = (transaction) => {
    setTransactionList((prev) => [...prev, transaction]);
  };

  const editTransaction = (updated) => {
    setTransactionList((prev) =>
      prev.map((t) => (t.id === updated.id ? updated : t))
    );
  };

  const deleteTransaction = (id) => {
    setTransactionList((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <FinanceContext.Provider
      value={{
        transactionList,
        addTransaction,
        editTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
