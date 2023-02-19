import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState(0);

  // function to handle button clicks
  const handleButtonClick = (operator) => {
    // perform the calculation based on the operator and update the result
    if (operator === '+') {
      setResult(result + inputValue);
    } else if (operator === '-') {
      setResult(result - inputValue);
    } else if (operator === '*') {
      setResult(result * inputValue);
    } else if (operator === '/') {
      setResult(result / inputValue);
    }

    // clear the input value
    setInputValue(0);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen before" >
      <h1 className="text-2xl font-bold text-hubBlue mb-8">Huble Calculator</h1>
      {/*Top of calulator */}
      <div className="flex flex-col w-2/4 h-56 mb-8 bg-gray-200 rounded-lg border-2 border-hubBlue justify-center items-center">
        <input type="number"
          value={inputValue}
          // onFocus={() => setInputValue('')}
          onChange={(e) => setInputValue(Number(e.target.value))}
          className="w-22 h-12 mb-4 bg-gray-200 border-2 border-hubBlue text-right text-2xl text-hubBlue" />
        <div className="flex gap-2">
          <button className="w-12 h-12 bg-hubBlue hover:bg-hubDarkBlue border-2 border-hubBlue text-white"
            onClick={() => handleButtonClick('+')}>+</button>
          <button className="w-12 h-12 bg-hubBlue hover:bg-hubDarkBlue border-2 border-hubBlue text-white"
            onClick={() => handleButtonClick('-')}>-</button>
          <button className="w-12 h-12 bg-hubBlue hover:bg-hubDarkBlue border-2 border-hubBlue text-white"
            onClick={() => handleButtonClick('*')}>*</button>
          <button className="w-12 h-12 bg-hubBlue hover:bg-hubDarkBlue border-2 border-hubBlue"
            onClick={() => handleButtonClick('/')}>/</button>
        </div>
      </div>
      {/*Bottom of calulator */}
      <div className="flex flex-col w-2/4 h-56 text-4xl font-bold text-hubBlue bg-gray-200 rounded-lg border-2 border-hubBlue justify-center items-center">
        <h2>{result}</h2>
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
}

export default App;
