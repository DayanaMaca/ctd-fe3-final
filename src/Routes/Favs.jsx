import React from "react";
import Card from "../Components/Card";
import { useDentStates } from "../Context/Context";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
  
  //const {favState} =  useDentStates()
 
  const favs = JSON.parse(localStorage.getItem("favoriteDents")) || [];


  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.length ? (
          favs.map((fav) => (
            <Card
              key={fav.id}
              name={fav.name}
              username={fav.username}
              id={fav.id}
            />
          ))
        ) : (
          <p>No hay favoritos</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
