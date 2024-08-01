"use client";
import { pokedexList } from "@/interfaces/pokedex";
import { ContextType } from "@/types/indexTypes";
import React, { createContext, useContext, useEffect } from "react";

const AppContext = createContext<ContextType>({
  getPokemonList: () => {},
});

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const getPokemonList = async () => {
    try {
      const request = await fetch("https://pokeapi.co/api/v2/pokemon");
      const pokemon: pokedexList = await request.json();
    } catch (error) {
      console.log("Ocurrio un error: " + error);
    }
  };
  useEffect(() => {}, []);
  return (
    <AppContext.Provider
      value={{
        getPokemonList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
