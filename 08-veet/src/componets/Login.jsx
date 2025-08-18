
import React, {useState,useContext} from "react"

import Context from "../Context/Context.jsx"

export default function Login(){
    const [users,setUsers]=useState("");
    const [pass,setPass]=useState("");
   
    const {setUser}=useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username: users, password: pass });
    }

    return(
        <div>
            <h2>Login</h2>
            <input
                value={users}
                onChange={(e)=>setUsers(e.target.value)}
                type="text"
                placeholder="Enter Your Username"
            />
            
            <input
                value={pass}
                onChange={(e)=>setPass(e.target.value)}
                type="password"
                placeholder="Enter Your Password"
            />
            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}
// ...existing code...