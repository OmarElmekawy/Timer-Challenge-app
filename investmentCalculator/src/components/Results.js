import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  let resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>investment value</th>
          <th>interest (year)</th>
          <th>total interest</th>
          <th>invested capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((dataYear) => {
          const totalInvestment =
            dataYear.valueEndOfYear -
            dataYear.annualInvestment * dataYear.year -
            initialInvestment;
          const totalAmountInestment =
            dataYear.valueEndOfYear - totalInvestment;
          return (
            <tr key={dataYear.year}>
              <td>{dataYear.year}</td>
              <td>{formatter.format(dataYear.valueEndOfYear)}</td>
              <td>{formatter.format(dataYear.interest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
              <td>{formatter.format(totalAmountInestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
