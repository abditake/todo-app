import { json } from "express";
import React, { useState } from "react";

export const SettingsContext = React.createContext();

export default function SettingsProvider({children}) {

    const [completed, setCompleted] = useState(storage? storage.completed: false)
    const [pageItems, setPageItems] = useState(storage? storage.completed: 3)
    const [sort, setSort] = useState(storage? storage.completed: 'difficulty')
    const [save, setSave ] = useState('false');

    // adding today maybe

    const showCompletedItem = (bool) =>{
        setCompleted(bool);
    };

    const values = {
        completed,
        pageItems,
        sort,
        showCompleted,
        changeItems,
        sortBy,
        storeSettings,
    };

    const changeItems = (quantity) => {
        setPageItems(quantity);
    };

    const sortBy = (sortStr) =>{
        // make sure it is a property in our item ==> enum in our form 
        setSort(sortStr);
    }
    
    const storeSettings = () =>{
        setSave(!save)
    }

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify({completed,pageItems,sort}));
    },[save])

    
    return (
        <SettingsContext.Provider value={{values}}>
            {children}
        </SettingsContext.Provider>
    )
}