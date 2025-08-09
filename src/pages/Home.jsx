import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { FinanceContext } from "../context/FinanceContext";

import FinanceChart from "../components/FinanceChart";

const Home = () => {
  const { user } = useContext(UserContext);
  const { transactionList } = useContext(FinanceContext);

  const balance = transactionList.reduce((acc, t) => {
    return t.type === "income" ? acc + t.amount : acc - t.amount;
  }, 0);

  return (
    <div className="container">
    

      <h1 className="greeting">Witaj, {user?.name}!</h1>

      <h2 className="balance">Twój bilans: {balance.toFixed(2)} zł</h2>

      <div className="chart-wrapper">
        <FinanceChart />
      </div>
    </div>
  );
};

export default Home;



