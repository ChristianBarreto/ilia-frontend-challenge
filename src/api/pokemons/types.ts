export type Pokemon = {
  id: string,
  name: string,
  images: {
    small: string,
    large: string,
  },
  supertype: string
}

export type PokemonFetch = {
  count: number,
  page: number,
  pageSize: number,
  totalCount: number,
  data: Pokemon[],
}

