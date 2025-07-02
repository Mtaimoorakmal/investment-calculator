
import { formatPKR } from "../utils/investment";
import { Banknote, BarChart3, TrendingUp, LayoutGrid } from "lucide-react";

const stats = (last, years) => [
  {
    title: "Total Invested",
    value: formatPKR(last.cumulative),
    subtitle: "",
    icon: <Banknote className="w-7 h-7 text-blue-600 mb-2" />,
    color: "from-blue-100 to-blue-50"
  },
  {
    title: `After ${years} Years`,
    value: formatPKR(last["Money Market (12%)"]),
    subtitle: "Money Market (12%)",
    icon: <BarChart3 className="w-7 h-7 text-cyan-600 mb-2" />,
    color: "from-cyan-100 to-blue-50"
  },
  {
    title: `After ${years} Years`,
    value: formatPKR(last["PSX Stocks (18%)"]),
    subtitle: "PSX Stocks (18%)",
    icon: <TrendingUp className="w-7 h-7 text-yellow-600 mb-2" />,
    color: "from-yellow-100 to-orange-50"
  },
  {
    title: `After ${years} Years`,
    value: formatPKR(last["Balanced Portfolio (15%)"]),
    subtitle: "Balanced (15%)",
    icon: <LayoutGrid className="w-7 h-7 text-green-600 mb-2" />,
    color: "from-green-100 to-green-50"
  },
];

export default function InvestmentSummary({ schedule, years }) {
  if (!schedule?.length) return null;
  const last = schedule[schedule.length - 1];

  return (
    <div className="w-full max-w-5xl mx-auto mb-8">
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-4 
          gap-5
        "
      >
        {stats(last, years).map((s, i) => (
          <div
            key={i}
            className={`
              bg-gradient-to-br ${s.color} 
              rounded-2xl shadow-md 
              border border-blue-100 
              p-4 md:p-6
              flex flex-col items-center
              transition 
              hover:scale-105 
              hover:shadow-xl
            `}
          >
            {s.icon}
            <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-bold">{s.title}</div>
            {s.subtitle && (
              <div className="text-xs text-blue-700 mb-1 font-semibold">{s.subtitle}</div>
            )}
            <div className="text-xl md:text-2xl font-extrabold text-blue-900 tracking-tight">
              {s.value} <span className="text-sm font-bold text-blue-700">PKR</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
