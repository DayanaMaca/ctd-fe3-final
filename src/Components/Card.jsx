import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favoriteDents")) || [];
    const isFav = favs.find((fav) => fav.id === id) ? true : false;
    setIsFav(isFav);
  }, []);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favs = JSON.parse(localStorage.getItem("favoriteDents")) || [];
    const newFavs = favs.filter((fav) => fav.id !== id);
    setIsFav(!isFav);

    if (isFav) {
      localStorage.setItem("favoriteDents", JSON.stringify(newFavs));
      alert("se agregó a favoritos");

      

      return;
    }

    localStorage.setItem(
      "favoriteDents",
      JSON.stringify([...favs, { name, username, id }])
    );
  

  //const {favDispatch } = useDentStates()
  

}
  return (
    <div className="card">

        {/* En cada card deberan mostrar en name - username y el id */}
        <img className="doctorstyle" src="./images/doctor.jpg" alt="" />
        <h2>{id}</h2>
        <h2>{name}</h2>
        <h2>{username}</h2>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        <Link key={id} to={'/dentist/' + id}>Details</Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">ADD⭐</button>
    </div>
  );
};

export default Card;