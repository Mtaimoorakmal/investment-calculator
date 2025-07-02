import { formatPKR } from "../utils/investment";

export default function InvestmentSummary({ schedule, years }) {
  if (!schedule?.length) return null;
  const last = schedule[schedule.length - 1];

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="bg-gradient-to-r from-blue-100 via-sky-50 to-green-50 rounded-2xl shadow-xl border border-blue-200 px-8 py-6 flex flex-col md:flex-row md:justify-around gap-5">
        {/* Total Invested */}
        <div className="flex-1 text-center">
          <div className="text-sm text-blue-700 mb-1 uppercase tracking-wide font-semibold">
            Total Invested
          </div>
          <div className="text-2xl font-extrabold text-blue-900 tracking-tight">
            {formatPKR(last.cumulative)} <span className="text-lg font-bold">PKR</span>
          </div>
        </div>
        {/* Money Market */}
        <div className="flex-1 text-center">
          <div className="text-xs text-blue-500 mb-1">
            After {years} Years, <span className="font-bold text-blue-600">Money Market (12%)</span>
          </div>
          <div className="text-xl font-bold text-blue-700">
            {formatPKR(last["Money Market (12%)"])} <span className="text-base font-normal">PKR</span>
          </div>
        </div>
        {/* PSX Stocks */}
        <div className="flex-1 text-center">
          <div className="text-xs text-yellow-700 mb-1">
            After {years} Years, <span className="font-bold text-yellow-800">PSX Stocks (18%)</span>
          </div>
          <div className="text-xl font-bold text-yellow-700">
            {formatPKR(last["PSX Stocks (18%)"])} <span className="text-base font-normal">PKR</span>
          </div>
        </div>
        {/* Balanced */}
        <div className="flex-1 text-center">
          <div className="text-xs text-green-700 mb-1">
            After {years} Years, <span className="font-bold text-green-800">Balanced (15%)</span>
          </div>
          <div className="text-xl font-bold text-green-700">
            {formatPKR(last["Balanced Portfolio (15%)"])} <span className="text-base font-normal">PKR</span>
          </div>
        </div>
      </div>
    </div>
  );
}
