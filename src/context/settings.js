import React, { useState } from "react";

export const SettingsContext = React.createContext();

export default function SettingsProvider({children}) {
    
    //step 3: complete  
    const [completed, setCompleted] = useState(false)
    const [pageItems, setPageItems] = useState(4)
    const [sort, setSort] = useState('')
    const [save, setSave] = useState('false');

    // adding today maybe

    // const addCompletedItem = (item) =>{
    //     // use this to change state --- possibly today??
    // }
    
    return (
        <SettingsContext.Provider value={{completed, pageItems, sort}}>
            {children}
        </SettingsContext.Provider>
    )
}