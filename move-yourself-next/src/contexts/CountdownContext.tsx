import { createContext, ReactNode, useEffect, useState } from "react";


interface CountdownContextData {
    isActive: boolean;
    hasFinished: boolean;
    minutes: number;
    seconds: number;
    resetCountdown: () => void;
    startCountdown: () => void;
  }

  interface CountdownProviderProps{
    children: ReactNode; 
  }

  const CountdownContext = createContext({} as CountdownContextData)

  export function CountdownProvider({ children }: CountdownProviderProps) {
    return (
        <CountdownContext.Provider value={{}}>
            {children}
        </CountdownContext.Provider>
    )
  }