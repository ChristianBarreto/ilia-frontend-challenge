import { useParams } from "react-router-dom"
import { getPokemonById } from "../../api/pokemons";
import { useEffect, useState } from "react";
import { Pokemon } from "../../api/pokemons/types";
import Modal from "../molecules/Modal";
import Button from "../atoms/Button";
import { usePokeball } from "../../context/PokeballContext";


export default function PokemonPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [modalOpen, setModalOpen] = useState(false);
  const { dispatch } = usePokeball();

  useEffect(() => {
    if (id) {
      getPokemonById(id).then((res) => {
        setPokemon(res)
      }).catch((err) => {
        console.error(err)
      })
    }
  }, []);

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleGetPokemon = () => {
    if (pokemon) {
      dispatch({type: "add", pokemon})
    };
  };

  return (
    <div>
      <div className="mt-6 border-t border-gray-100 flex gap-4 flex-wrap">
        <div>
          <img src={pokemon?.images.large} alt={pokemon?.name} width={400}/>
        </div>
        <div>
          <dl className="divide-y divide-gray-100 w-full">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 w-full">
              <dt className="text-sm/6 font-medium text-gray-900">Name</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{pokemon?.name}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">ID</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{pokemon?.id}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Type</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{pokemon?.supertype}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Resistences</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {pokemon?.resistances ? (
                    <>
                      {pokemon?.resistances?.map((resistence) => (
                        <p>{resistence.type} ({resistence.value})</p>
                      ))}
                    </>
                  ) : (
                    <p>(no data for this card)</p>
                  )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Weaknesses</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {pokemon?.weaknesses ? (
                  <>
                    {pokemon?.weaknesses?.map((weakness) => (
                      <p>{weakness.type} ({weakness.value})</p>
                    ))}
                  </>
                ) : (
                  <p>(no data for this card)</p>
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Attacks</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <Button handleClick={handleClick}>See attack details</Button>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Actions</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <Button handleClick={handleGetPokemon}>Get this Pokemon</Button>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <Modal open={modalOpen} setOpen={setModalOpen} attacks={pokemon?.attacks}/>
    </div>
  )
}