import { createContext, useContext } from "react";
export const context=createContext({
    themeMode:"Light",
    darkTheme:()=>{},
    lightTheme:()=>{}
});

export const Contextprovider=context.Provider;

export default function useTheme(){
    return useContext(context);
}