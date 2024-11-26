export type Pokemon = {
  id: string,
  name: string
}

export type PokemonFetch = {
  count: number,
  page: number,
  pageSize: number,
  totalCount: number,
  data: Pokemon[],
}

