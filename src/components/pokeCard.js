import React from 'react'
import './pokeCard.css'

const PokeCard = ({id, name, imgage, type, onPokemonClick}) => {
    const style = type + ' card'
    return (
        <div className={style} onClick={onPokemonClick}>
            <div className='number'><small>#0{id}</small></div>
            <img src={imgage} alt={name} />
            <div className='detail-wrapper'>
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}
export default PokeCard