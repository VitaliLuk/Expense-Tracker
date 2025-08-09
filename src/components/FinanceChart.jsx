import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const COLORS = ["#022acbff", "#f80606ff"];

const FinanceChart = () => {
  const { transactionList } = useContext(FinanceContext);

  const income = transactionList
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expense = transactionList
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const data = [
    { name: "Przychód", value: income },
    { name: "Wydatek", value: expense },
  ];

  const renderLegendText = (value, entry) => {
    const { payload } = entry;
    return `${value}: ${payload.value.toFixed(2)} zł`;
  };

  return (
    <div>
      <PieChart width={330} height={330}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={130}
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [`${value.toFixed(2)} zł`, ""]} />
        <Legend
          className="finance-legend"
          formatter={renderLegendText}
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </div>
  );
};

export default FinanceChart;
