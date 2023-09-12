import React, { useContext } from 'react'
import DH from '../Assets/DH.png'
import { Link } from 'react-router-dom'
import { ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, toggleTheme } = useContext(ContextGlobal);

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <nav className={`nav-bar ${state.theme} ${state.theme === 'dark' ? 'dark-navbar' : ''}`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <img src={DH} alt='DH-logo' />
      <div className='nav-links'>
        <Link to={'/'} className='buttonNav'>Home</Link>
        <Link to={'/contact'} className='buttonNav'>Contact</Link>
        <Link to={'/favs'} className='buttonNav'>Favoritos</Link>
      </div>
      <div className='toggle-container'>
        <input type="checkbox" id="theme-toggle btn1" className="styled-checkbox" onChange={handleThemeChange} checked={state.theme === 'dark'} />
        <label htmlFor="theme-toggle btn1" className="styled-label"></label>
      </div>


    </nav>
  )
}

export default Navbar