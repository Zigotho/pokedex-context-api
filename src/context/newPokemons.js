import React, { createContext, useState, useContext } from "react";

const ListPokemonSeenContext = createContext();

export default function ListPokemonSeenProvider({ children }) {
  const [listPokemonSeen, setListPokemonSeen] = useState([]);
  return (
    <ListPokemonSeenContext.Provider
      value={{ listPokemonSeen, setListPokemonSeen }}
    >
      {children}
    </ListPokemonSeenContext.Provider>
  );
}

export function useListPokemonSeen() {
  const context = useContext(ListPokemonSeenContext);
  if (context === undefined) {
    throw new Error(
      "useListPokemonSeen must be used within a ListPokemonSeenProvider"
    );
  } else {
    const { listPokemonSeen, setListPokemonSeen } = context;
    return { listPokemonSeen, setListPokemonSeen };
  }
}
