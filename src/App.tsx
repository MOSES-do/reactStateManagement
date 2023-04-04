import { PokemonProvider } from "./hooks/customHook";
import { SearchBox } from "./components/SearchBox";
import { PokemonList } from "./components/PokemonList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="mx-auto max-w-3xl">
      <QueryClientProvider client={queryClient}>
        <PokemonProvider>
          <SearchBox />
          <PokemonList />
        </PokemonProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
