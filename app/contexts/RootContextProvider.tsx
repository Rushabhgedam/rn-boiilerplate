import React, { createContext } from "react";



const AppContext = createContext({})


const RootContextProvider = ({children}:{children: React.ReactNode}) => {


  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}



export default RootContextProvider