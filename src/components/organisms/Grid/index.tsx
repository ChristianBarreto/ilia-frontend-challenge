import { useEffect, useState } from "react";
import { Pokemon } from "../../../api/pokemons/types"
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

export default function Grid({
  pokeData
}: {
  pokeData: Pokemon[];
}) {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setSlideIndex(0);
  }, [pokeData]);

  const handleOpenDetails = (id: string) => {
    navigate(`/pokemon/${id}`)
  }

  return (
      <div className="w-full hidden md:block" data-carousel="static">
        <div className="grid grid-cols-5 gap-4">
          {pokeData.map((pokemon) => (
            <div key={pokemon.id} className="border p-2 rounded-lg shadow-md" data-cy="pokemon-card">
              <div>
                <img src={pokemon.images.small} className="w-full h-full" alt={pokemon.name} />
              </div>
              <p className="text-sm"><span className="font-bold" data-cy="card-name">Name:</span> {pokemon.name}</p>
              <p className="text-sm"><span className="font-bold" data-cy="card-id">ID:</span> {pokemon.id}</p>
              <p className="text-sm"><span className="font-bold" data-cy="card-type">Type:</span> {pokemon.supertype}</p>
              <div className="flex justify-end mt-4">
                <Button handleClick={() => handleOpenDetails(pokemon.id)} id="card-button">Ver detalhes</Button>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}