import React from "react";
import Context from "./Context.jsx";
import { useState } from "react";


const User = ({children}) => {
    const [user,setUser]=useState(null);

    return (
        <Context.Provider value={{user,setUser}}>
        {children}

        </Context.Provider>
    )


}

export default User;