import { useEffect, useState } from "react";
import { Pokemon } from "../../../api/pokemons/types"
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";
import CarouselControlls from "../../cells/CarouselControlls";

export default function Carousel({
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
      <div className="w-full md:hidden border p-4 mt-4 rounded-lg bg-gray-100 shadow-md" data-carousel="static">
        <div className="">
          {pokeData.map((pokemon, index) => (
            <div key={pokemon.id} className={`${slideIndex !== index && "hidden" }`}>
              <div>
                <img src={pokemon.images.small} className="w-full h-full" alt={pokemon.name} />
              </div>
              <p><span className="font-bold">Name:</span> {pokemon.name}</p>
              <p><span className="font-bold">ID:</span> {pokemon.id}</p>
              <p><span className="font-bold">Name:</span> {pokemon.supertype}</p>
              <div className="flex justify-center">
                <Button handleClick={() => handleOpenDetails(pokemon.id)}>Ver detalhes</Button>
              </div>
            </div>
          ))}
        </div>
        <CarouselControlls
            slideIndex={slideIndex}
            setSlideIndex={setSlideIndex}
            len={pokeData.length}
        />
    </div>
  )
}