import { useEffect, useState } from "react";
import { Pokemon } from "../../../api/pokemons/types"
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

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
        <div className="flex justify-between">
          <button
            onClick={() => setSlideIndex(slideIndex - 1)}
            disabled={slideIndex === 0} type="button"
            className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/50 dark:bg-gray-800/30 group-hover:bg-indigo/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
          </button>
          <p className="text-indigo-500 mt-2">{slideIndex+1}/{pokeData.length} cards</p>
          <button
            onClick={() => setSlideIndex(slideIndex + 1)}
            disabled={slideIndex === 9}
            type="button"
            className="relative top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  bg-indigo-500/50 dark:bg-gray-800/30 group-hover:bg-indigo/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
    </div>
  )
}