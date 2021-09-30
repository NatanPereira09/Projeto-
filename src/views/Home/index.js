import React from 'react';
import { Link } from "react-router-dom";
import './styles.css'
const Home = () =>{
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/usuario">Criar Usuário</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
