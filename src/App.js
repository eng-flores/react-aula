import React from 'react';
import './App.css';
import simpsons from './assets/simpsons.jfif'
import icon from './assets/icon.png'
import { Content } from './Content'

const App = () => {
  return (
    <div className='container'>
      <div className="container-box">
        <img className='picture' src={simpsons} alt='simpsons'></img>
        <h1 className="title">Order Summary</h1>
        <p className='container-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <Content image={icon} imageDescription='Simpsons' title='Annual Plan' subtitle='$59.99/year' buttonTitle="Change"></Content>
        <button className='container-button'>Proceed to Payment</button>
        <button className='container-button cancel'>Cancel Order</button>
      </div>
    </div>
  );
}

export default App;
