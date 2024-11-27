import { createContext, ReactNode, Reducer, useContext, useReducer } from "react";
import { Pokemon } from "../api/pokemons/types";

type ACTIONTYPE =
  | { type: "add"; pokemon: Pokemon }
  | { type: "remove"; id: string }

const initPokeball: Pokemon[] = [];

type PokeballContexType = {
  pokeball: Pokemon[],
  dispatch: (action: ACTIONTYPE) => void;
};


const PokeballContext = createContext({} as PokeballContexType);

export function PokeballProvider({
  children
}: {
  children: ReactNode
}) {
  const [pokeball, dispatch] = useReducer<Reducer<Pokemon[], ACTIONTYPE>>(pokeballReducer, initPokeball);

  return (
    <PokeballContext.Provider value={{pokeball, dispatch}}>
      {children}
    </PokeballContext.Provider>
  )
}

export function usePokeball() {
  return useContext(PokeballContext);
}

function pokeballReducer(pokeball: Pokemon[], action: ACTIONTYPE): Pokemon[] {
  switch(action.type) {
    case 'add': {
      return [...pokeball, action.pokemon]
    }
    case 'remove': {
      return pokeball.filter((p) => p.id !== action.id)
    }
    default: {
      return pokeball;
    }
  }
} // NOTE: I used here immutabilities which is strongly recommended to handle complex data handling.
// NOTE: I used ContextAPI here instead Redux according what was specified by e-mail.