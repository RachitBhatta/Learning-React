import { useEffect, useState } from "react";

export default function useCurrencyinfo() {
    const [rates, setRates] = useState({});
    const [base, setBase] = useState("USD");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.frankfurter.app/latest?from=USD`) 
        .then(res => res.json())
        .then(data => {
        console.log("API response:", data);
        setBase(data.base || "USD");           
        setRates(data.rates || {});
        setLoading(false);
        })
        .catch(err => {
        console.error(err);
        setError(err);
        setLoading(false);
        });
    }, []);

  return { rates, base, loading, error };
}
