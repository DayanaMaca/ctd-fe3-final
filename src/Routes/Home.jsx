import React from 'react'
import Card from '../Components/Card'
import { useDentStates } from '../Context/Context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentList} = useDentStates()
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentList.map ( dent => <Card key={dent.id} id={dent.id} name = {dent.name} username={dent.username}/>)}
      
        {/* Aqui deberias renderizar las cards */}
       
      </div>
    </main>
  )
}

export default Home