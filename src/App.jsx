import { useState } from "react";
import InvestmentChart from "./components/InvestmentChart";
import InvestmentSummary from "./components/InvestmentSummary";


import InvestmentForm from "./components/InvestmentForm";
import InvestmentTable from "./components/InvestmentTable";
import { calculateInvestmentSchedule } from "./utils/investment";

export default function App() {
  const [monthly, setMonthly] = useState(20000);
  const [years, setYears] = useState(10);
  const [increase, setIncrease] = useState(0);

  const annualRates = {
    "Money Market (12%)": 0.12,
    "PSX Stocks (18%)": 0.18,
    "Balanced Portfolio (15%)": 0.15,
  };

  const schedule = calculateInvestmentSchedule({
    startMonthly: Number(monthly),
    yearlyIncrease: Number(increase),
    years: Number(years),
    annualRates,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 flex items-center justify-center p-2 md:p-6">
      <div className="w-full max-w-5xl mx-auto bg-white/90 rounded-3xl shadow-xl p-4 md:p-10 border border-blue-100">
       <div className="flex flex-col items-center gap-2 mb-4">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-sky-400 shadow text-white text-3xl">
          <svg width={32} height={32} viewBox="0 0 20 20" fill="currentColor"><path d="M17.5 14.75a.75.75 0 01-.75.75H3.25a.75.75 0 010-1.5h13.5a.75.75 0 01.75.75zm-2.5-4a.75.75 0 01-.75.75H5.75a.75.75 0 010-1.5h8.5a.75.75 0 01.75.75zm-2.5-4a.75.75 0 01-.75.75H8.75a.75.75 0 010-1.5h2.5a.75.75 0 01.75.75z" /></svg>
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight text-center mt-1">
          Investment Plan Calculator
        </h1>
        <span className="bg-blue-50 px-4 py-1 rounded-full text-blue-700 font-semibold text-xs md:text-sm shadow mt-1">
          Pakistan Market Example
        </span>
        </div>

        <InvestmentForm
          monthly={monthly}
          years={years}
          increase={increase}
          setMonthly={setMonthly}
          setYears={setYears}
          setIncrease={setIncrease}
        />
         <InvestmentSummary schedule={schedule} years={years} />
        <InvestmentChart schedule={schedule} />
        
       


        <InvestmentTable schedule={schedule} />
        <div className="mt-6 text-center text-xs text-blue-700 opacity-70">
          This calculator is for educational purposes. Returns are hypothetical and not guaranteed.<br />
          <span className="italic">Made with ❤️ for Pakistan investors • 2024</span>
        </div>
      </div>
    </div>
  );
}
