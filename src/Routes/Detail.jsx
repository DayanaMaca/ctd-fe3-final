import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  //const [detail, setDetail] = useState({});
  //const { id } = useParams();

  const [dent, setDentist] = useState ({})
  const {id} = useParams()
  const url =  `https://jsonplaceholder.typicode.com/users/${id}`


  useEffect (() => {
    fetch (url)
    .then (res => res.json())
    .then (data => setDentist(data))
  }, [])
  



  
  
  return (
    <div>
      <h1>Detail Dentist id: {dent.id}</h1>
      <table className="table">
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <thead>
        <tr>
          <th>Nombre </th>
          <th>Email </th>
          <th>Phone </th>
          <th>Website </th>
        </tr>
        </thead>
        
        <tbody>
        <tr>
          <td>{dent.name}</td>
          <td>{dent.email}</td>
          <td>{dent.phone}</td>
          <td>{dent.website}</td>
        </tr>
        </tbody>

      
      </table>
    </div>
  );
};


export default Detail