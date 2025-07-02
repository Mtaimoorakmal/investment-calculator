// 





import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { formatPKR } from "../utils/investment";

export default function InvestmentChart({ schedule }) {
  return (
    <div className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 max-w-4xl mx-auto my-10 bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
      <h3 className="text-center text-lg font-bold text-blue-700 mb-2">
        Projected Future Value (PKR)
      </h3>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={schedule}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" tickLine={false} label={{ value: "Year", position: "insideBottom", offset: -5 }} />
          <YAxis 
            tickFormatter={v => formatPKR(v)}
            label={{ value: "PKR", angle: -90, position: "insideLeft", offset: 10 }}
          />
          <Tooltip formatter={v => formatPKR(v)} />
          <Legend />
          {/* New line for actual investment */}
          <Line
            type="monotone"
            dataKey="cumulative"
            stroke="#64748b"
            strokeWidth={2}
            dot={false}
            strokeDasharray="4 4"
            name="Actual Investment"
          />
          <Line type="monotone" dataKey="Money Market (12%)" stroke="#2563eb" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="PSX Stocks (18%)" stroke="#d97706" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="Balanced Portfolio (15%)" stroke="#059669" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
