import React, { useState } from 'react';
import { InputBox, useCurrencyinfo } from './customhooks';

function App() {
  const [fromcurr, setFromcurr] = useState("USD");
  const [tocurr, setTocurr] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState("");
  const { rates, base, loading, error } = useCurrencyinfo();

  // include base in options so it appears in dropdown
  const options = base ? [base, ...Object.keys(rates)] : Object.keys(rates);

  const swap = () => {
    const tempCurrency = fromcurr;
    const tempAmount = result !== "" ? Number(result) : amount;

    setFromcurr(tocurr);
    setTocurr(tempCurrency);
    setAmount(tempAmount);
    setResult("");
  }

  const convert = () => {
    if ((fromcurr !== base && !rates[fromcurr]) || (tocurr !== base && !rates[tocurr])) return;

    const fromRate = fromcurr === base ? 1 : rates[fromcurr];
    const toRate   = tocurr   === base ? 1 : rates[tocurr];

    const output = (Number(amount) / fromRate) * toRate;
    setResult(Number(output.toFixed(2)));
  }

  if (loading) return <p>Loading rates...</p>;
  if (error) return <p>Error fetching rates!</p>;

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => { e.preventDefault(); convert(); }}>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                value={amount}
                options={options}
                currency={fromcurr}
                setCurrency={setFromcurr}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                value={result}
                options={options}
                currency={tocurr}
                setCurrency={setTocurr}
                onChange={() => {}}
                disable={true}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {fromcurr.toUpperCase()} to {tocurr.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
