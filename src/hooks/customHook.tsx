import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
/* 
  Working with useContext in typescript
*/
interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attck: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

//custom hook
function usePokemonSource() {
  //:
  //     pokemon: Pokemon[]; //not necessary just for type inference, also(:)
  //  } {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("/pokemon.json")
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  return { pokemon };
}

/*
export const PokemonContext = createContext<
ReturnType<typeof usePokemonSource>
>({} as unknown as ReturnType<typeof usePokemonSource>);

export function usePokemon() {
    return useContext(PokemonContext); //to fix the destructuring in app.tsx in PokemonList;
}
*/
//or
export const PokemonContext = createContext<
  ReturnType<typeof usePokemonSource> | undefined
>(undefined);

export function usePokemon() {
  return useContext(PokemonContext)!; //to fix the destructuring in app.tsx in PokemonList;
}

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  return (
    <PokemonContext.Provider value={usePokemonSource()}>
      {children}
    </PokemonContext.Provider>
  );
}

export default usePokemonSource;
