/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={state.theme}>
      <h1>Favoritos</h1>
      <div className="card-grid">
        {state.favs.length > 0 ? (
          state.favs.map((dentist) => (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
            />
          ))
        ) : (
          <p>No has agregado favoritos aún.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;

/*
const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavs);
  }, []);

  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((fav) => (
          <Card key={fav.id} {...fav} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
*/
