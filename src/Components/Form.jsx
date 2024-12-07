/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.length <= 5 || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Por favor verifique su información nuevamente");
      setSuccess("");
    } else {
      setError("");
      setSuccess(
        `Gracias ${formData.name}, te contactaremos cuando antes vía mail`
      );
      console.log("Datos enviados:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre Completo:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <button type="submit">Enviar</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
};

export default Form;
