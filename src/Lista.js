import React, { useEffect, useState } from 'react'

export default Pokemon = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    const getData = () => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
        .then(response => response.json())
        .then(pokemons => setData(pokemons))
    }
    getData()
  }, [])

  return (
    <div>
      {data && data.map((pokemon, index) => {
        return (
          <div key={index}>
            <h1>{pokemon.name}</h1>
            <p>{pokemon.url}</p>
            <a href={pokemon.url}>{pokemon.name}</a>
          </div>
        )
      })}
    </div>
  )
}