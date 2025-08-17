import React,{useId} from "react"

function InputBox({
    label,
    value,
    onChange,
    currency,
    setCurrency,
    options = [], 
    className = "",
    disable=false
}) {
    const amountId=useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  htmlFor={amountId}className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={value??""}
                    onChange={onChange}
                    disabled={disable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={currency}
                    onChange={e=>setCurrency(e.target.value)}
                    
                >
                    
                {options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;