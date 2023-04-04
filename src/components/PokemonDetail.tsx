import { usePokemon } from "../hooks/customHook";
import { useMatch, Link } from "@tanstack/react-location";

function PokemonDetail() {
  const { pokemon } = usePokemon();
  const {
    params: { id },
  } = useMatch();

  const pokemonData = pokemon.find((p) => p.id === +id);

  if (!pokemonData) {
    return <div>No data found...</div>;
  }

  const {
    id: pid,
    name,
    type,
    hp,
    attack,
    special_defense,
    special_attack,
    defense,
    speed,
  } = pokemonData;

  return (
    <div>
      <Link to="/">
        <h1 className="text-2xl font-bold mb-5">&lt; Home</h1>
      </Link>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
        <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="flex-1 flex flex-col p-8">
            <img
              className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pid}.png`}
              alt=""
            />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{name}</h3>

            <ul className="mt-3">
              <li>HP: {hp}</li>
              <li>Defense: {defense}</li>
              <li>Sepcial Defense: {special_defense}</li>
              <li>Sepcial Attack:{special_attack}</li>
              <li>Attack: {attack}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default PokemonDetail;
