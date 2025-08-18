import React, {useState,useContext} from "react"
import Context from "../Context/Context";

export default function Profile(){
    const {user}=useContext(Context);
    if(!user) return <div>Please Login</div>;
    return <div>Welcome {user.username}</div>

}

