import React from 'react';
import './Store.css';
import perfume from './assets/perfume.jpg'

export default class Store extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 5
    }
  }

  addToCart = () => {
    if (this.state.count > 0) {
      this.setState(() => ({
        count: this.state.count - 1
      }))
      alert("Compra bem sucedida")
    } else {
      alert("Produto sem estoque")
    }
  }
  render() {
    return (
      <div>
        <div>
          <img src={perfume} alt="Perfume"></img>
        </div>
        <div>
          <h1>Store</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Estoque {this.state.count}</p>
          <button onClick={this.addToCart}>Add to Cart</button>
        </div>
      </div>
    )
  }
}