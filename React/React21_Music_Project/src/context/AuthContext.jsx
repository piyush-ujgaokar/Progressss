import { createContext } from "react";

export const authContext=createContext()

export const AuthContextProvider=({children})=>{

    const user="hello"


    return <authContext.Provider value={user}>
        {children}
    </authContext.Provider>
}