import { createContext, useState } from "react";

const AppContext = createContext({});

export function AppWrapper() {
  const [timer, setTimer] = useState(25);
  return (
    <AppContext.Provider value={timer}>
    // Your JSX code here
    </AppContext.Provider>
  )
}