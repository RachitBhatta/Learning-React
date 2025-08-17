import { useEffect,useState } from "react";
let api =`cur_live_7V6KH5IMdgFp9TXOnkKBShOoA99H1SljdF4HeBMh`;
export default function useCurrencyinfo(){
    const [rates,setRates]=useState({});
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        setLoading(true);
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${api}`)
            .then(res=>res.json())
            .then(data=>{
                setRates(data.data)
                setLoading(false);
            })
            .catch(err=>{
                console.error(err)
                setError(err);
                setLoading(false);
            });
        

    },[])
    return {rates,loading,error};

}