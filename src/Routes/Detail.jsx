/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Components/styles/detail.css"; // Ruta relativa a la ubicación de Detail.jsx
import doctorImage from "/images/doctor.jpg";

const Detail = () => {
  const { id } = useParams(); // Obtén el id del dentista desde la URL
  const [dentist, setDentist] = useState(null); // Estado para guardar el detalle del dentista

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error("Error al obtener el detalle del dentista:", error);
      }
    };

    fetchDentist();
  }, [id]);

  if (!dentist) {
    return <p>Cargando detalles del dentista...</p>;
  }

  return (
    <div className="detail">
      <h1>Detalle del Dentista</h1>
      <div className="detail-card">
        <img src={doctorImage} alt="Doctora" className="doctor-image" />
        <h2>{dentist.name}</h2>
        <p>
          <strong>Usuario:</strong> {dentist.username}
        </p>
        <p>
          <strong>Email:</strong> {dentist.email}
        </p>
        <p>
          <strong>Teléfono:</strong> {dentist.phone}
        </p>
        <p>
          <strong>Sitio web:</strong> {dentist.website}
        </p>
      </div>
    </div>
  );
};

export default Detail;
