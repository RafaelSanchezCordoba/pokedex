import React, { useState, useEffect } from 'react'
import PokeCard from '../components/pokeCard'
import './Home.css'

function App() {
  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  const [loadLess, setLoadLess] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  async function getNextPokemons() {
    const res = await fetch(loadMore)
    const data = await res.json()
    const names = data.results.map(pokemon => pokemon.name)
    const promises = names.map(name => fetch(`https://pokeapi.co/api/v2/pokemon/${name}`))
    const results = await Promise.all(promises)
    const jsonResults = await Promise.all(results.map(result => result.json()))

    setLoadMore(data.next)
    setLoadLess(data.previous)
    setAllPokemons(jsonResults)
  }

  async function getPreviousPokemons() {
    const res = await fetch(loadLess)
    const data = await res.json()
    const names = data.results.map(pokemon => pokemon.name)
    const promises = names.map(name => fetch(`https://pokeapi.co/api/v2/pokemon/${name}`))
    const results = await Promise.all(promises)
    const jsonResults = await Promise.all(results.map(result => result.json()))

    setLoadMore(data.next)
    setLoadLess(data.previous) 
    setAllPokemons(jsonResults)
  }

  useEffect(() => {
    getNextPokemons()
  }, [])

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
      <button className='load-more' onClick={() => getNextPokemons()}>Load More</button>
      <button className='load-more' onClick={() => getPreviousPokemons()}>Previous</button>
    </div>
  )
}
export default App