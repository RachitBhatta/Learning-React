import { useState } from "react";
import { useEffect,useRef} from "react";
import { useCallback } from "react";

function App() {
  const [length,setLength]=useState(8);
  const [numAllow,setnumAllow]=useState(false);
  const [charAllow,setcharAllow]=useState(false);
  const [password,setPassword]=useState("");
  const passwordRef=useRef(null);
  const copy=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  },[password]);
  const passwordGenerator=useCallback(()=>{
        let pass="";
        let char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let num="0123456789";
        let specialChar="!@#$%&";
        if(numAllow) char+=num
        if(charAllow) char+=specialChar

        for(let i=1;i<=length;i++){
            let char1=Math.floor(Math.random()*char.length+1)
            pass+=char.charAt(char1);
            setPassword(pass);

        }
  },[length,numAllow,charAllow,setPassword]);

  useEffect(()=>{passwordGenerator()},[numAllow,charAllow,length,passwordGenerator])
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-700">
      <div className="bg-amber-200 w-150 h-auto p-4 rounded-xl shadow-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-700 drop-shadow-xl">
          Password Generator
        </h1>
        <div className="flex w-full mt-4 h-12 ">
            <input 
              type="text"
              value={password}
              placeholder="Generate Password"
              className="flex-1 outline-none py-1 px-3 bg-white text-gray-600 rounded-l-2xl"
              readOnly
              ref={passwordRef}
            />
            <button 
              onClick={copy}
              className="bg-amber-600 text-white py-1 px-3 rounded-r-2xl font-bold cursor-pointer hover:bg-amber-800 duration-200">
              Copy
            </button>
        </div>
        <div className="flex text-sm gap-x-2 mt-5 ">
          <div className="flex gap-x-1 item-center mr-5">
            <input 
            type="range"
            min={5}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{
              setLength(e.target.value)
            }}
            />
            <label>Length:{length}</label>

            
          </div>
          <div className="flex gap-x-1 item-center mr-5">
            <input 
            type="checkbox"
            defaultChecked={numAllow}
            id="numberInput"
            className="rounded-xl"
            onChange={()=>{
              setnumAllow((prev)=>!prev)
            }}
            />
            <label>Number</label>
          </div>
          <div className="flex gap-x-1 item-center mr-5" >
            <input 
            type="checkbox"
            defaultChecked={charAllow}
            id="charInput"
            className="rounded-xl"
            onChange={()=>{
              setcharAllow((prev)=>!prev)
            }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

