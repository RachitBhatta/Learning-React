import React, { useState } from 'react'
import {InputBox,useCurrencyinfo} from './customhooks'

function App() {
  const [fromcurr, setFromcurr] = useState("USD");
  const [tocurr, setTocurr] = useState("NPR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState("");
  const { rates, loading, error } = useCurrencyinfo();
  const options = Object.keys(rates || {});

  const swap = () => {
    setFromcurr(tocurr);
    setTocurr(fromcurr);
    setAmount(result !== "" ? Number(result) : amount);
    setResult("");
  }

  function convert() {
    if (!rates[tocurr] || !rates[fromcurr]) return;
    const output = (Number(amount) * rates[tocurr]) / rates[fromcurr];
    setResult(Number(output.toFixed(2)));
  }

  if (loading) return <p>Loading rates...</p>;
  if (error) return <p>Error fetching rates!</p>;

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://imgs.search.brave.com/gp_LdVbNL4ODoLIJbijaeD7xqR3VXlLc-wt_EUFlDKY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/MjY2MDI2OC9waG90/by9zdG9jay1tYXJr/ZXQtaW52ZXN0bWVu/dC1ncmFwaC13aXRo/LWluZGljYXRvci1h/bmQtdm9sdW1lLWRh/dGEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTg3QzI2Rmtl/cG1Sd0VTZWVXYTRw/aFV2N1BBcEVrX05Y/TzhqMm1fNDRZd1E9')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
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
                onChange={() => { }}
                disable={true}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {fromcurr.toUpperCase()} to {tocurr.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App