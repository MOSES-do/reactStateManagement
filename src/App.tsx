import usePokemonSource from "./hooks/customHook";
import {
  PokemonContext,
  PokemonProvider,
  usePokemon,
} from "./hooks/customHook";

function SearchBox() {
  return (
    <input
      className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      placeholder="Search"
      value={""}
      onChange={() => {}}
    />
  );
}

const PokemonList = () => {
  const { pokemon } = usePokemon();
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {pokemon.map((p) => (
        <li
          key={p.id}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <img
              className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
              alt=""
            />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{p.name}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <div className="mx-auto max-w-3xl">
      {/* We are going to move this provider into the customHook to hide the link between it from and the provider from this page and import it from the customHook as having children*/}
      {/* <PokemonContext.Provider value={usePokemonSource()}>
        <SearchBox />
        <PokemonList />
      </PokemonContext.Provider> */}

      <PokemonProvider>
        <SearchBox />
        <PokemonList />
      </PokemonProvider>
    </div>
  );
}

export default App;
