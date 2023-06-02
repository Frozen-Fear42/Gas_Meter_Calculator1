import React, { useState } from "react";

function App() {
  const [exit, setExit] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [numExpenses, setNumExpenses] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [additionalValues, setAdditionalValues] = useState([]);
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [totalExpenses, setTotalExpenses] = useState("");
  const [finalResult, setFinalResult] = useState("");

  const handleExit = () => {
    setExit(true);
  };

  const handleCalculation = () => {
    const result1 = parseFloat(input1) - parseFloat(input2);
    const result2 = parseFloat(input3) - parseFloat(input4);
    const multipliedResult1 = result1;
    const multipliedResult2 = Math.round(result2) * unitPrice;
    const roundedResult1 = Math.round(multipliedResult1);
    const roundedResult2 = Math.round(multipliedResult2);
    setResult1(roundedResult1);
    setResult2(roundedResult2);
  };

  const handleExpenses = () => {
    const parsedNumExpenses = parseInt(numExpenses);
    if (parsedNumExpenses > 0) {
      const newExpenses = [];
      for (let i = 0; i < parsedNumExpenses; i++) {
        newExpenses.push(parseFloat(prompt(`Enter expense ${i + 1}:`)));
      }
      setExpenses(newExpenses);
      const total = newExpenses.reduce((acc, expense) => acc + expense, 0);
      setTotalExpenses(total);
    }
  };
  const handleAdditionalValues = () => {
    const numValues = parseInt(
      prompt("Enter the number of additional values:")
    );
    const values = [];
    for (let i = 0; i < numValues; i++) {
      values.push(parseFloat(prompt(`Enter additional value ${i + 1}:`)));
    }
    setAdditionalValues(values);
  };

  const handleFinalResult = () => {
    let sum = result1 + result2;
    sum -= totalExpenses;
    additionalValues.forEach((value) => {
      sum += value;
    });
    setFinalResult(Math.round(sum));
  };
  if (exit) {
    return (
      <div className="container">
        <h1 className="heading">Thank you for using the program. Goodbye!</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="heading">Gas Meter Calculator</h1>
      <div className="input-section">
        <label className="input-label">Enter first meter closing value:</label>
        <input
          type="number"
          className="input-field"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <label className="input-label">Enter first meter opening value:</label>
        <input
          type="number"
          className="input-field"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <h2 className="result-label">Result: {result1}</h2>
      </div>
      <div className="input-section">
        <label className="input-label">Enter second meter closing value:</label>
        <input
          type="number"
          className="input-field"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />
        <label className="input-label">Enter second meter opening valve:</label>
        <input
          type="number"
          className="input-field"
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
        />
        <h2 className="result-label">Result: {result2}</h2>
      </div>
      <div className="calc-section">
        <label className="input-label">Enter unit price:</label>
        <input
          type="number"
          className="input-field"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
        />
        <button className="calc-button" onClick={handleCalculation}>
          Calculate
        </button>
      </div>
      <div className="result-section">
        <h2 className="result-label">Sum of results: {result1 + result2}</h2>
      </div>
      <div className="expense-section">
        <label className="input-label">Enter number of expenses:</label>
        <input
          type="number"
          className="input-field"
          value={numExpenses}
          onChange={(e) => setNumExpenses(e.target.value)}
        />
        <button className="expense-button" onClick={handleExpenses}>
          Enter Expenses
        </button>
        <h2 className="result-label">Total Expenses: {totalExpenses}</h2>
      </div>
      <div className="additional-section">
        <button className="additional-button" onClick={handleAdditionalValues}>
          Enter Additional Values
        </button>
        <h2 className="final-result-label">Final Result: {finalResult}</h2>
      </div>
      <div className="exit-section">
        <button className="exit-button" onClick={handleExit}>
          Exit
        </button>
      </div>
    </div>
  );
}

export default App;
