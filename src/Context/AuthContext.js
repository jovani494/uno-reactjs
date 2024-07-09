import { createContext , useState } from "react";

export default function AuthContext() {
    const [user , setUser] = useState();

    const AuthContext = createContext()

    return(
        <AuthContext.Provider value={user}>

        </AuthContext.Provider>
    )
}