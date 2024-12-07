/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/context";
import "./styles/card.css";

/* eslint-disable react/prop-types */
const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    const isAlreadyFav = state.favs.some((fav) => fav.id === id);
    if (!isAlreadyFav) {
      dispatch({ type: "ADD_FAV", payload: { id, name, username } });
      alert(`${name} se agregó a favoritos.`);
    } else {
      alert(`${name} ya está en favoritos.`);
    }
  };

  return (
    <div className="card">
      <img
        src="/images/doctor.jpg"
        alt={`Imagen de ${name}`}
        className="card-image"
      />
      <h3 className="card-name">{name}</h3>
      <p className="card-username">@{username}</p>
      <Link to={`/dentist/${id}`} className="card-link">
        Ver detalles
      </Link>
      <button onClick={addFav} className="card-button">
        Add Fav
      </button>
    </div>
  );
};

export default Card;

/*
const Card = ({ id, name, username }) => {
  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const newFav = { id, name, username };

    if (!favs.find((fav) => fav.id === id)) {
      favs.push(newFav);
      localStorage.setItem("favs", JSON.stringify(favs));
      alert(`${name} agregado a favoritos`);
    } else {
      alert(`${name} ya está en favoritos`);
    }
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{username}</p>
      <Link to={`/dentist/${id}`}>Ver detalle</Link>
      <button onClick={addFav}>Add Fav</button>
    </div>
  );
};

export default Card;
*/
