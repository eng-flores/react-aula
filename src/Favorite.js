import React, { useEffect, useState } from 'react'

export const Favorite = () => {
  const [detail, setDetail] = useState('')
  const [data, setData] = useState('Batatinha')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = () => {
      fetch('https://pokeapi.co/api/v2/pokemon/togepi')
        .then(response => response.json())
        .then(pokemon => setDetail(pokemon))
    }
    getData()
  }, [loading])

  const verificarLoading = () => {
    if (detail) {
      setLoading(false)
    }
  }

  return (
    <div>
      <p>{detail?.species && detail.species.name}</p>
      <p>{detail?.species && detail.species.url}</p>
      <img src={detail?.sprites && detail.sprites.front_default} alt={detail?.species && detail.species.name}></img>
    </div>
  )
}
