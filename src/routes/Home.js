import React, { useState, useEffect } from 'react'
import PokeCard from '../components/PokeCard'
import PokeInfo from '../components/PokeInfo'
import './home.css'

function App() {
  const [allPokemons, setAllPokemons] = useState([])
  const [pokemon, setPokemon] = useState({})
  const [page, setPage] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedName, setSelectedName] = useState("bulbasaur")

  async function getPokemos(page) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${(page -1) * 20}}`)
    const data = await res.json()
    const names = data.results.map(pokemon => pokemon.name)
    const promises = names.map(name => fetch(`https://pokeapi.co/api/v2/pokemon/${name}`))
    const results = await Promise.all(promises)
    const jsonResults = await Promise.all(results.map(result => result.json()))
    setAllPokemons(jsonResults)
  }

  async function getPokemon(name) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await res.json()
    console.log(data)
    setPokemon(data)
  }

  useEffect(() => {
    getPokemos(page)
  }, [page])

  useEffect(() => {
    getPokemon(selectedName)
  }, [selectedName])

  function handleClick(name) {
    setSelectedName(name)
    setIsVisible(true)
  }

  function closeInfo() {
    setIsVisible(false)
  }

  return (
    <div className='app-container'> 
      <h1>Pokemons</h1>
      <div className='pokemon-container'>
        <div>
          {" "}
          {isVisible ? (
            <>
              <PokeInfo 
                id={pokemon.id}
                name={pokemon.name}
                frontImg={pokemon.sprites.front_default}
                backImg={pokemon.sprites.back_default}
                primaryType={pokemon.types[0].type.name}
                secondaryType={pokemon.types[1] ? pokemon.types[1].type.name : null}
                weight={pokemon.weight}
                height={pokemon.height}
                stats={pokemon.stats.map(stat => stat.base_stat)}
                onClose={closeInfo}/>
            </>
          ) : (
            ""
          )}
        </div>
        <div className='all-container'>
          {allPokemons.map(pokemon => 
            <PokeCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              imgage={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              onPokemonClick={() => handleClick(pokemon.name)}
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