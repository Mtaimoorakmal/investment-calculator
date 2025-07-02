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

        <div className="w-full flex justify-center mt-2 mb-4">
          <div className="flex items-center justify-center gap-3 md:gap-6 bg-white/80 backdrop-blur-md px-4 md:px-8 py-3 rounded-2xl shadow-lg max-w-2xl">
            <img
              src="/logo.png"
              alt="Investment Calculator Logo"
              className="
                h-auto
                w-10 sm:w-12 md:w-14 lg:w-16
                max-w-[64px]
                object-contain
                flex-shrink-0
              "
              style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}
            />
            <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight text-center">
              Investment Plan Calculator
            </h1>
          </div>
        </div>
        <span className="bg-blue-50 px-4 py-1 rounded-full text-blue-700 font-semibold text-xs md:text-sm shadow mt-1 mx-auto block w-max">
          Pakistan Market Example
        </span>



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
