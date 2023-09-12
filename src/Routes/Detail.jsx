import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import doctor from "../Assets/doctor.jpg";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const [dentist, setDentist] = useState([]);

  const fetchDentistById = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDentist(data)
      })
      .catch((err) => {
        console.log('Error' + err.message)
      })
  }

  useEffect(() => {
    fetchDentistById();
    console.log('testing fetch')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id]);

  return (
    <div className='detail-container'>
      <h1>Detail Dentist {dentist.id}</h1>
      {Object.keys(dentist).length > 0 ? (
        <div className='card card-details'>
          <img src={doctor} alt='' className="card-image" />
          <h3>{dentist.name}</h3>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Detail