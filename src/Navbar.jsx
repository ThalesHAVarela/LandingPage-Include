import React from 'react';
import './index.css'; // Arquivo de estilos para a Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">INCLUDE ENGENHARIA</div>
      <ul className="navbar-links">
        <li><a href="#Sobre">Sobre</a></li>
        <li><a href="#Candidatos">Candidatos</a></li>
        <li><a href="#Contato">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;