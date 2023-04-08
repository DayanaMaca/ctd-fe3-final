import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { ContextGlobal } from "./utils/global.context";
import { useDentStates } from '../Context/Context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {


  const navigate = useNavigate()

  const {themeState, themeDispash} = useDentStates()
  const switchTheme = () => {
    if (themeState.theme) {
      themeDispash({type: 'SWITCH_DARK'})
    } else {
      themeDispash({type: 'SWITCH_LIGHT'});
    }
  }

 return (
    <nav>
       <div >DH Odonto</div>
        <div>   
        <button onClick={() => navigate(-1)}>↩</button> 
          <Link to= './home'>Home</Link>
          <Link to= '/dentist/:id'></Link> 
          <Link to= '/contacto'>Contact</Link> 
          <Link to= '/favs'>Favs</Link>
          <button onClick={switchTheme}>{themeState.theme ? '🌙' : '🌞' } </button>

        



   


         {/*  <button  onClick={toggle}>
        {state.theme === "light" ? "🌙 dark" : "🌞 light"} <span />
        mode
      </button> */}
          
        </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    </nav>
  )
}
export default Navbar