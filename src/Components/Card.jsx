import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import doctor from "../Assets/doctor.jpg";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";



const Card = (props) => {

  const { addFav, removeFav, state } = useContext(ContextGlobal)
  const [isFaved, setIsFaved] = useState(false);

  const handleFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    if (isFaved) {
      removeFav(props.dentist.id);
    } else {
      addFav(props.dentist);
    }
  };

  useEffect(() => {
    setIsFaved(state.favs.some((dentist) => dentist.id === props.dentist.id));
  }, [state.favs, props.dentist.id]);

  return (
    <div className="card-container">
      <div className="card" >
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src={doctor} alt={props.dentist.id} className="card-image" />
        <h2>{props.dentist.name}</h2>
        <h3>{props.dentist.username}</h3>
        <h4 className="card-id">{props.dentist.id}</h4>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/detail/${props.dentist.id}`} className="link-text"> Ir al Detalle </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={handleFav} className="favButton">
          <FontAwesomeIcon icon={isFaved ? solidHeart : regularHeart} />
        </button>
      </div>
    </div>

  );
};

export default Card;
