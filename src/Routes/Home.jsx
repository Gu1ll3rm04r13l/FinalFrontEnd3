import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentist, setDentist] = useState([]);
  const {state} = useContext(ContextGlobal);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setDentist(data)
      })
      .catch((err) => {
        console.log('Error' + err.message)
      })
  }, [])

  return (
    <main className={`main-container ${state.theme}`} >
      {/* <h1>Home</h1> */}
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentist.map((data, index) => {
          return <Card dentist={data} key={index} />;
        })}
      </div>
    </main>
  )
}

export default Home