/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/context";

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        dispatch({ type: "SET_DATA", payload: data });
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
