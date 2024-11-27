import { useState } from 'react'
import { usePokeball } from '../../../context/PokeballContext';
import { Pokemon } from '../../../api/pokemons/types';

export default function PokeballMenu() {
  const {pokeball, dispatch} = usePokeball();
  const [show, setShow] = useState(false);

  return (
    <div className="">
      <div className='' onClick={() => setShow(!show)}>
        <p className='text-gray-300 data-[focus]:bg-gray-100 data-[focus]:outline-none'>
          My Pokeball
          <span className="ml-2 inline-flex items-center rounded-full bg-red-400 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-red-600/10">
             {pokeball.length}
          </span>
        </p>
      </div>

      {pokeball.length ? (
        <div className={`mt-5 space-y-1 p-2 bg-gray-100 absolute ${!show && 'hidden'} shadow-md`}>
          {pokeball.map((item: Pokemon) => (
            <div
              key={item.name}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <p>
                <span>{item.name}</span>
                <span onClick={() => dispatch({type: "remove", id: item.id})}> (remove)</span>
              </p>
            </div>
          ))}
        </div>
      ): (
        <div className={`mt-5 space-y-1 p-2 bg-gray-100 absolute ${!show && 'hidden'} shadow-md`}>
          <div
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
          >
              <p>
                <span>Empty, go get some Pokemons</span>
              </p>
            </div>
          </div>
      )}
    </div>

  )
}
