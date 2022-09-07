import React from 'react';
import './Form.css';

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      idade: '',
      filme: '',
      form: {},
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { form, ...dados } = this.state
    this.setState({ form: dados})
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              name='nome'
              value={this.state.nome}
              onChange={this.handleChange}
              placeholder='Insira seu nome'
            />
            Nome
          </label>

          <label>
            <input
              name='idade'
              value={this.state.idade}
              onChange={this.handleChange}
              placeholder='Insira sua idade'
            />
            Idade
          </label>

          <label>
            <input
              name='filme'
              value={this.state.filme}
              onChange={this.handleChange}
              placeholder='Insira seu filme favorito'
            />
            Filme
          </label>

          <button>Submit</button>
        </form>
        {this.state.form && (
          <div>
            <h1>Dados</h1>
            <p>{this.state.form.nome}</p>
            <p>{this.state.form.idade}</p>
            <p>{this.state.form.filme}</p>
          </div>
        )}
      </div>
    )
  }
}