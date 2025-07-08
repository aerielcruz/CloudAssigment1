export const generateRandomImageUrl = (input) => {
  const maxPokemon = 1010; // total Pokémon as of Gen 9
  const hash = [...input].reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  const pokemonId = (Math.abs(hash) % maxPokemon) + 1;

  const artworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

  return artworkUrl
}