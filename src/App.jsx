import Result from "./components/Result";
import UserForm from "./components/UserForm";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <UserForm onChangeInput={handleChange} userInput={userInput} />
      {inputIsValid && <Result input={userInput} />}
      {!inputIsValid && <p className="center">Please enter Valid Data ...</p>}
    </>
  );
}

export default App;
