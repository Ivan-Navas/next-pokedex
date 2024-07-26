"use client";
import { ContextType } from "@/types/indexTypes";
import React, { createContext, useContext, useEffect } from "react";

const AppContext = createContext<ContextType>({
});

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(()=>{
  },[])
  return (
    <AppContext.Provider
      value={{
      
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
