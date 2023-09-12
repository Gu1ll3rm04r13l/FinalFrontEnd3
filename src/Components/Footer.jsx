import React, {useContext} from 'react'
import DH from '../Assets/DH.png'
import { ContextGlobal } from './utils/global.context';

const Footer = () => {

  const {state} = useContext(ContextGlobal);

  return (
    <footer className={`footer-container ${state.theme}`}>
        <p>Powered by</p>
        <img src={DH} alt='DH-logo' />
    </footer>
  )
}

export default Footer
