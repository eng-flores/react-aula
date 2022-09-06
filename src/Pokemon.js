import React from 'react'

export default class Pokemon extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemons: ''
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
      .then(response => response.json())
      .then(pokemons => this.setState({ pokemons: pokemons.results }))
  }

  render() {
    return (
      <div>
        {this.state.pokemons && this.state.pokemons.map((pokemon, index) => {
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
}