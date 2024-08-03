import InputUser from "./components/userInput";
import { useState } from "react";
import Results from "./components/Results";

import { calculateInvestmentResults, formatter } from "./util/investment.js";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 5,
  });
  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => ({
      ...prevInput,
      [inputIdentifier]: +newValue,
    }));
  }

  return (
    <>
      <InputUser userInput={userInput} onSelectChange={handleChange} />
      {inputIsValid && <Results input={userInput} />}
      {!inputIsValid && <p className="center"> the input is unvalid</p>}
    </>
  );
}

export default App;
