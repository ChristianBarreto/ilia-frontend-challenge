import axios from "axios"
import { baseUrl } from ".."
import { PokemonFetch } from "./types";

export const getPokemons = ({
  q,
  page = 1,
  pageSize = 10
}: {
  q?: string,
  page?: number,
  pageSize?: number,
}): Promise<PokemonFetch | any> => new Promise((resolve, reject) => {
  axios.get<PokemonFetch[]>(`${baseUrl}/cards/?${q && `q=name:${q}*`}&page=${page}&pageSize=${pageSize}&orderBy=name`)
    .then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err)
    });
});