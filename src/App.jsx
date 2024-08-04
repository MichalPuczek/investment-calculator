import { useState } from "react";
// Components
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import Results from "./components/Results";

function App() {
  // STATE 1
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  // HANDLERS
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <Calculator userInput={userInput} onChangeInput={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
