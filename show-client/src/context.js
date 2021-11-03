import { createContext,useState } from "react";
export const MyContext = createContext();

function AppContext({children}){
    const [results,setResults]=useState([]);
    const [user, setUser]=useState(null);

    return (
    <MyContext.Provider value ={{results, setResults, user, setUser}}>
        {children}
    </MyContext.Provider>
    )
}

export default AppContext;