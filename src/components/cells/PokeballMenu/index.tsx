import { useState } from 'react'
import { usePokeball } from '../../../context/PokeballContext';
import { Pokemon } from '../../../api/pokemons/types';
import styles from './PokeballMenu.module.scss'

export default function PokeballMenu() {
  const {pokeball, dispatch} = usePokeball();
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className={`${styles.btnLike} ${styles.container}`} onClick={() => setShow(!show)}>
        <p className=''>
          My Pokeball
          <span className={styles.badge}>
             {pokeball.length}
          </span>
        </p>
      </div>
      <div className={`${styles.pokeball} ${!show && 'hidden'}`}>
        <div className={styles.pokeballTop}></div>
        {pokeball.length ? (
          <div className={styles.pokeballContent}>
            {pokeball.map((item: Pokemon, index) => (
              <div
                key={item.name}
              >
                <p>
                  <span>{index+1}. {item.name}</span>
                  <span
                    onClick={() => dispatch({type: "remove", id: item.id})}
                    className={styles.btnLike}
                  > (remove)</span>
                </p>
              </div>
            ))}
          </div>
        ): (
          <div className={styles.pokeballContent}>Empty, go get some Pokemons</div>
        )}
        <div className={styles.pokeballBotton}></div>
      </div>
    </div>
  )
}
