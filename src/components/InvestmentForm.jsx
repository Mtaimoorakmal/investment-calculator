export default function InvestmentForm({
  monthly, years, increase,
  setMonthly, setYears, setIncrease,
}) {
  return (
    <div className="flex justify-center mb-8">
      <form
        className="w-full max-w-xl bg-white/95 rounded-2xl shadow-2xl ring-1 ring-blue-100 px-6 py-8 flex flex-col gap-6
          backdrop-blur-md border border-blue-200"
        onSubmit={e => e.preventDefault()}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex flex-col">
            <label className="block text-blue-900 font-semibold text-xs mb-1">
              Monthly Investment (PKR)
            </label>
            <input
              type="number"
              className="px-4 py-3 rounded-xl border-2 border-blue-200 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 font-semibold text-blue-800 transition-all duration-200"
              min={0}
              value={monthly}
              onChange={e => setMonthly(e.target.value)}
              placeholder="10000"
              onBlur={e => !e.target.value && setMonthly(10000)}
              autoFocus
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-blue-900 font-semibold text-xs mb-1">
              Years
            </label>
            <input
              type="number"
              className="px-4 py-3 rounded-xl border-2 border-blue-200 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 font-semibold text-blue-800 transition-all duration-200"
              min={1}
              value={years}
              onChange={e => setYears(e.target.value)}
              placeholder="20"
              onBlur={e => !e.target.value && setYears(20)}
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-blue-900 font-semibold text-xs mb-1">
              Yearly Increase (%)
            </label>
            <input
              type="number"
              className="px-4 py-3 rounded-xl border-2 border-blue-200 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 font-semibold text-blue-800 transition-all duration-200"
              min={0}
              value={increase}
              onChange={e => setIncrease(e.target.value)}
              placeholder="10"
              onBlur={e => !e.target.value && setIncrease(10)}
            />
 
          </div>
        </div>
      </form>
    </div>
  );
}




