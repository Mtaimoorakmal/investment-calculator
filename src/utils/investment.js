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

  // Each year, store {amount, depositYear} for every year's deposit
  let allDeposits = [];

  for (let year = 1; year <= years; year++) {
    let yearlyTotal = monthly * 12;
    cumulative += yearlyTotal;
    allDeposits.push({ amount: yearlyTotal, year: year });
    // For this row, include only deposits up to this year
    let futureValues = {};
    for (const [label, rate] of Object.entries(annualRates)) {
      let sum = 0;
      for (let i = 0; i < allDeposits.length; i++) {
        const d = allDeposits[i];
        // How many years does this deposit have left to grow after this year
        const yearsToGrow = years - d.year + 1 - (years - year);
        if (yearsToGrow > 0) {
          sum += d.amount * Math.pow(1 + rate, yearsToGrow);
        }
      }
      futureValues[label] = sum;
    }

    schedule.push({
      year,
      monthly: monthly.toFixed(2),
      yearlyTotal: yearlyTotal.toFixed(2),
      cumulative: cumulative.toFixed(2),
      ...Object.fromEntries(
        Object.entries(futureValues).map(([k, v]) => [
          k,
          v.toFixed(2),
        ])
      ),
    });

    monthly *= 1 + yearlyIncrease / 100;
  }
  return schedule;
}
