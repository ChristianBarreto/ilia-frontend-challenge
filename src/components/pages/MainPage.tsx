import { useEffect, useRef, useState } from "react";
import { getPokemons } from "../../api/pokemons";
import { PokemonFetch } from "../../api/pokemons/types";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function MainPage() {
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState<PokemonFetch>();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const searchRef = useRef('');

  useEffect(() => {
    setIsLoading(true);
    getPokemons({
      q: search,
      page: page,
      pageSize: 10
    })
      .then((res) => {
        const oldData = (pokemons?.data && search === searchRef.current) ? pokemons.data : [];

        setPokemons({
          ...res,
          data: [...res.data] // Note: I'm also using immutability here.
        })
        searchRef.current = search;
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      })
  }, [page, search]);

  return (
    <div>
      <Input name="search" label="Search Pokemon" value={search} setValue={setSearch} placeholder="Pikachu..."/>
      <p className="text-2xl text-blue-600">Pokémons</p>
      {pokemons?.data.length? (
        <div>
          {pokemons?.data.map((pokemon, index) => (
            // Note: I was forced to put index as key because the API returns multiple itens with same ID when we search by name.
            <div key={index}> 
              <p>{pokemon.name}</p>
            </div>
          ))}
          <hr />
          <div className="flex justify-end">
            <p className="text-slate-400">Showing {pokemons ? (pokemons?.page * pokemons?.pageSize) : 0} out of {pokemons ? (pokemons?.totalCount) : 0}</p>
          </div>
          <div className="flex justify-center mt-4">
            <Button handleClick={() => setPage(page + 1)} disabled={isLoading}>Show more</Button>
          </div>
        </div>
        ) : (
          <>{isLoading ? (<p>...loading</p>) : (<p>No Pokémons to show ;(</p>)}</>
        )
      }
    </div>
  )
}