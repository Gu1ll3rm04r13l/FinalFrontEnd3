import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state, removeFav } = useContext(ContextGlobal);
  const favs = state?.favs || [];
  const [show, setShow] = useState(false);

  const handleClearFavs = () => {
    localStorage.removeItem("favData");
    favs.forEach((dentist) => {
      removeFav(dentist.id);
    });
  };

  useEffect(() => {
    if (favs.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [favs.length])

  return (
    <div className={`favs-container ${state.theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.sort((a, b) => a.id - b.id).map((dentist) => (
          <Card dentist={dentist} key={dentist.id} />
        ))}
      </div>
      {show && <button className="btn-favs" onClick={handleClearFavs}>Clear Favs</button>}
    </div>
  );
};

export default Favs;
