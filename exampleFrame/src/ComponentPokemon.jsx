import { useEffect, useState } from "react";

function ComponentPokemon() {
  async function consultarPokemon() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    if (response.ok) {
      let json = await response.json();

      console.log(json);
      setTimeout(() => {
        setPokemon({
          name: json.name,
          weight: json.weight,
          img: json.sprites.front_default,
        });
      }, 2000);
    }
  }

  const [pokemon, setPokemon] = useState(null);
  useEffect(function () {
    consultarPokemon();
  }, []);

  if (pokemon === null) {
    return <p>cargando...</p>;
  }
  return (
    <div>
      nombre: {pokemon.name} peso:{pokemon.weight}{" "}
      <img src={pokemon.img} alt="" />
    </div>
  );
}

export default ComponentPokemon;
