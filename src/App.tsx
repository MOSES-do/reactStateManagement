import { PokemonProvider } from "./hooks/customHook";
import { SearchBox } from "./components/SearchBox";
import { PokemonList } from "./components/PokemonList";

function App() {
  return (
    <div className="mx-auto max-w-3xl">
      <PokemonProvider>
        <SearchBox />
        <PokemonList />
      </PokemonProvider>
    </div>
  );
}

export default App;
