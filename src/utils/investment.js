export const formatPKR = n =>
  Number(n).toLocaleString("en-PK", { maximumFractionDigits: 0 });

export function calculateInvestmentSchedule({
  startMonthly,
  yearlyIncrease,
  years,
  annualRates,
}) {
  let schedule = [];
  let monthly = startMonthly;
  let cumulative = 0;

  // For each year, store the deposit for that year and how many years it will grow
  let allYearlyDeposits = []; // For future value calculation

  for (let year = 1; year <= years; year++) {
    let yearlyTotal = monthly * 12;
    cumulative += yearlyTotal;

    allYearlyDeposits.push({ amount: yearlyTotal, yearsToGrow: years - year + 1 });

    // For this row: calculate future values for each scenario (as the sum of each year's deposit grown for its yearsToGrow)
    let futureValues = {};
    for (const [label, rate] of Object.entries(annualRates)) {
      let sum = 0;
      for (const d of allYearlyDeposits) {
        sum += d.amount * Math.pow(1 + rate, d.yearsToGrow);
      }
      futureValues[label] = sum;
    }

    schedule.push({
      year,
      monthly: monthly.toFixed(0),
      yearlyTotal: yearlyTotal.toFixed(0),
      cumulative: cumulative.toFixed(0),
      ...Object.fromEntries(
        Object.entries(futureValues).map(([k, v]) => [
          k,
          v.toFixed(0),
        ])
      ),
    });

    monthly *= 1 + yearlyIncrease / 100;
  }
  return schedule;
}
