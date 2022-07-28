import React, { useState, useEffect } from "react";

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

    // create some behaviors
  const showCompleted = () => {
    // make sure its a boolean
    setCompleted(!completed);
  };

  const changeItems = (quantity) => {
    setPageItems(quantity);
  };

  const sortBy = (sortStr) => {
    // possible validation:  make sure a property in our item?  maybe an enum in our form?  
    setSort(sortStr);
  }

  const storeSettings = () => {
    setSave(!save);
  }

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify({completed, pageItems, sort}))
  }, [save]);
  
  
  const values = {
    completed,
    pageItems,
    sort,
    showCompleted,
    changeItems,
    sortBy,
    storeSettings,
  }

  return(
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}