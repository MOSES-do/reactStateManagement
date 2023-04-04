import { PokemonProvider } from "./hooks/customHook";
import PokemonDetail from "./components/PokemonDetail";
import { SearchBox } from "./components/SearchBox";
import { PokemonList } from "./components/PokemonList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, ReactLocation, Router } from "@tanstack/react-location";

const queryClient = new QueryClient();
const location = new ReactLocation();

const routes = [
  {
    path: "/",
    element: (
      <>
        <SearchBox />
        <PokemonList />
      </>
    ),
  },

  {
    path: "/pokemon/:id",
    element: (
      <>
        <PokemonDetail />
      </>
    ),
  },
];

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonProvider>
        <Router location={location} routes={routes}>
          <div className="mx-auto max-w-3xl">
            <Outlet />
          </div>
        </Router>
      </PokemonProvider>
    </QueryClientProvider>
  );
}

export default App;
