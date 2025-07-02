import { formatPKR } from "../utils/investment";

export default function InvestmentTable({ schedule }) {
  return (
    <div className="overflow-auto rounded-lg shadow mb-2">
      <table className="min-w-full bg-white rounded-lg overflow-hidden text-xs md:text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-blue-200 to-sky-100 text-blue-800 font-bold text-center">
            <th className="p-3 text-center">Year</th>
            <th className="p-3 text-center">Monthly Invest</th>
            <th className="p-3 text-center">Yearly Total</th>
            <th className="p-3 text-center">Cumulative</th>
            <th className="p-3 text-center">Future Value<br />Money Market (12%)</th>
            <th className="p-3 text-center">Future Value<br />PSX Stocks (18%)</th>
            <th className="p-3 text-center">Future Value<br />Balanced (15%)</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((row, i) => {
            const isLast = i === schedule.length - 1;
            return (
              <tr
                key={i}
                className={
                  (isLast ? "font-bold " : "") +
                  (i % 2
                    ? "bg-blue-50 hover:bg-blue-100"
                    : "bg-white hover:bg-blue-50")
                }
              >
                <td className="p-3 text-center">{row.year}</td>
                <td className="p-3 text-center">{formatPKR(row.monthly)}</td>
                <td className="p-3 text-center">{formatPKR(row.yearlyTotal)}</td>
                <td className="p-3 text-center">{formatPKR(row.cumulative)}</td>
                <td className="p-3 text-center">{formatPKR(row["Money Market (12%)"])}</td>
                <td className="p-3 text-center">{formatPKR(row["PSX Stocks (18%)"])}</td>
                <td className="p-3 text-center">{formatPKR(row["Balanced Portfolio (15%)"])}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
