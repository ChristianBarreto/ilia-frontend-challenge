export type Attack = {
  cost: string[],
  name: string,
  text: string,
  damage: string,
  convertedEnergyCost: number,
}

export type Pokemon = {
  id: string,
  name: string,
  images: {
    small: string,
    large: string,
  },
  supertype: string,
  weaknesses: Array<{
    type: string,
    value: string,
  }>,
  resistances: Array<{
    type: string,
    value: string,
  }>,
  attacks: Attack[],
}

export type PokemonFetch = {
  count: number,
  page: number,
  pageSize: number,
  totalCount: number,
  data: Pokemon[],
}

