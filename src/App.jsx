import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { route } from "./Routes/routes";
import { useDentStates } from "./Context/Context";


function App() {

  const {themeState} = useDentStates()
  
  

  return (

    
    <div className={themeState.theme? 'App': 'App-dark'} style={{backgroundColor: themeState.bgColor, color: themeState.color }}>
        
          <Navbar/>
          <Routes>
            <Route path= '/' element = {<Home/>}/>
            <Route path= {route.home} element = {<Home/>}/>
            <Route path= {route.details} element = {<Detail/>}/>
            <Route path= {route.contact} element = {<Contact/>}/>
            <Route path= {route.favs} element = {<Favs/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
