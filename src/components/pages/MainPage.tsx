import { useEffect, useRef, useState } from "react";
import { getPokemons } from "../../api/pokemons";
import { PokemonFetch } from "../../api/pokemons/types";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Carousel from "../molecules/Carousel";
import Grid from "../molecules/Grid";

type FetchPokemonsParams = {
  q: string,
  page: number,
};

export default function MainPage() {
  const [pageNum, setPageNum] = useState(1);
  const [pokemons, setPokemons] = useState<PokemonFetch>();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const searchRef = useRef('');

  const fetchPokemons = ({q, page}: FetchPokemonsParams) => {
    setIsLoading(true);
    getPokemons({
      q,
      page,
      pageSize: 10
    }).then((res) => {
      setPokemons({
        ...res,
        data: [...res.data] // Note: I'm also using immutability here.
      })
      setIsLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setIsLoading(false);
    });
  };

  const handlePage = (direction: string) => {
    if (direction === "prev" && pageNum > 1) {
      setPageNum(pageNum - 1);
    } else if (direction === "next") {
      setPageNum(pageNum + 1);
    };
  };

  useEffect(() => {
    let num = pageNum;
    if (search !== searchRef.current) {
      num = 1;
      setPageNum(1);
    };
    
    const handler = setTimeout(() => fetchPokemons({q: search, page: num}), 400);
    searchRef.current = search;

    return () => clearTimeout(handler);
  }, [pageNum, search]);

  const currentPage = pokemons ? (pokemons?.page) : 0;
  const totalPages = pokemons ? Number((pokemons?.totalCount / 10).toFixed(0)) : 0;

  return (
    <div>
      <Input name="search" label="Search Pokemon" value={search} setValue={setSearch} placeholder="Pikachu..."/>
      <p className="text-2xl text-blue-600">Pokémons</p>
      {pokemons?.data.length? (
        <div>
          <Carousel pokeData={pokemons.data} />
          <Grid pokeData={pokemons.data} />
          <hr className="mt-8"/>
          <div className="flex justify-end">
            <p className="text-slate-400">Page {currentPage} out of {totalPages}</p>
          </div>
          <div className="flex justify-between mt-4">
            <Button handleClick={() => handlePage("prev")} disabled={isLoading || pageNum === 1}>Previous page</Button>
            <Button handleClick={() => handlePage("next")} disabled={isLoading || (currentPage === totalPages)}>Next page</Button>
          </div>
        </div>
        ) : (
          <>{isLoading ? (<p>...loading</p>) : (<p>No Pokémons to show ;&#40;</p>)}</>
        )
      }
    </div>
  );
};