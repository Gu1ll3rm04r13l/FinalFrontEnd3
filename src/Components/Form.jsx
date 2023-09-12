import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const initialData = {
    name: "",
    email: ""
  };

  const [data, setData] = useState(initialData)
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidName, setIsValidName] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault()

    if (isValidName && isValidEmail) {
      console.log("Datos enviados:", data);
      setIsSubmitted(true);
      setTimeout(() => {
        setData(initialData);
        setIsSubmitted(false);
        setIsValidEmail(false);
        setIsValidName(false);
      }, 3000);

    } else {
      console.error("Por favor verifique su información nuevamente.");
      setError(true);
    }

  }


  const handleNameChange = (e) => {
    const newName = e.target.value;
    setData((prevState) => ({ ...prevState, name: newName }));
    if (newName.trim().length > 5) setIsValidName(true);
    else setIsValidName(false);
    if (error) setError(false);
  }

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setData((prevState) => ({ ...prevState, email: newEmail }));
    if (validateEmail(newEmail)) setIsValidEmail(true);
    else setIsValidEmail(false);
    if (error) setError(false);
  };

  const validateEmail = (email) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
    // return true
  };

  return (
    <div className="contact-info">
      <form onSubmit={handleSubmit}>
        <label style={{ fontSize: '14px' }}>Nombre Completo: </label>
        <input type='text' name='name' placeholder='Nombre Completo' value={data.name} onChange={handleNameChange} />
        <label style={{ fontSize: '14px' }}>Email: </label>
        <input type='text' name='email' placeholder="Email" value={data.email} onChange={handleEmailChange} />
        <button className='btn-form' type="submit">Enviar Datos</button>

      </form>
      {isSubmitted && (<p style={{ color: "green" }}>Gracias {data.name}, te contactaremos cuando antes vía mail. </p>)}
      {error && (<p style={{ color: "red" }}> Por favor verifique su información nuevamente. </p>)}

    </div>
  );
};

export default Form;

