import React, { useState, useEffect } from 'react'
import PokeCard from '../components/PokeCard'
import './home.css'

function App() {
  const [allPokemons, setAllPokemons] = useState([])
  const [page, setPage] = useState(1)

  async function getPokemos(page) {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${(page -1) * 20}}`)
    const data = await res.json()
    const names = data.results.map(pokemon => pokemon.name)
    const promises = names.map(name => fetch(`https://pokeapi.co/api/v2/pokemon/${name}`))
    const results = await Promise.all(promises)
    const jsonResults = await Promise.all(results.map(result => result.json()))
    setAllPokemons(jsonResults)
  }

  useEffect(() => {
    getPokemos(page)
  }, [page])

  return (
    <div className='app-container'> 
      <h1>Pokemons</h1>
      <div className='pokemon-container'>
        <div className='all-container'>
          {allPokemons.map(pokemon => 
            <PokeCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              imgage={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
            />
          )}
        </div>
        
      </div>
      <button className='load-more' onClick={() => setPage(page + 1)}>Load More</button>
      <button className='load-more' onClick={() => setPage(page - 1)}>Previous</button>
    </div>
  )
}
export default App