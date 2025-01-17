import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResultDisplay from "./components/showResult";
import { calculateSeries } from "./helpers/mathHelpers";

function App() {
  const [result, setResult] = useState(null);

  const handleCalculate = (n) => {
    const res = calculateSeries(n);
    setResult(res);
  };

  return (
    <div>
      <h1>Cálculo de Serie</h1>
      <InputForm onCalculate={handleCalculate} />
      {result !== null && <ResultDisplay result={result} />}
    </div>
  );
}

export default App;