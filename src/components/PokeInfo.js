import React from 'react'
import './pokeInfo.css'

const PokeInfo = ({id, name, frontImg, backImg, primaryType, secondaryType, weight, height, stats, onClose}) => {
    const style = primaryType + ' card'
    return (
        <>
            <div className='poke-info'>
                <button className='close-button' onClick={onClose}>X</button>
                <p><b>{"#" + id + " " + name}</b></p>
                <div className='pokeImg-info'>
                    <img src={frontImg} alt={name} />
                    <img src={backImg} alt={name} />
                </div>
                <div>
                    <div className={style}>{primaryType}</div>
                    {secondaryType != null ? (
                        <div className={style}>{secondaryType}</div>
                    ) : (
                        ""
                    )}
                </div>
                <p>{weight / 10 + "kg " + height / 10 + "m"}</p>
                <b>Stats: </b>
                <div className='stats'>
                    <p>HP: {stats[0]}</p>
                    <p>Attack: {stats[1]}</p>
                    <p>Defense: {stats[2]}</p>
                    <p>Sp. Attack: {stats[3]}</p>
                    <p>Sp. Defense: {stats[4]}</p>
                    <p>Speed: {stats[5]}</p>
                </div>
            </div>
        </>
    )
}
export default PokeInfo