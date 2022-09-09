import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/favorito">Favorito</Link>
      <Link to="/lista">Lista</Link>
    </div>
  );
}

export default Home;
