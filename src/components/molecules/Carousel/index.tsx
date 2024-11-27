import { Pokemon } from "../../../api/pokemons/types"

export default function Carousel({
  pokeData
}: {
  pokeData: Pokemon[];
}) {

  return (
    <div>
      {pokeData.map((pokemon, index) => (
        // Note: I was forced to put index as key because the API returns multiple itens with same ID when we search by name.
        <div key={index}> 
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  )
}