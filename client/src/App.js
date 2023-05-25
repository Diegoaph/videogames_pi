/////////////////////////////////////////////////////////
//importaciones necesarias

import style from './App.module.css';
import Create from './components/create/Create.jsx';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail.jsx';
import About from './components/about/About.jsx';
import Nav from './components/nav/Nav.jsx';
import { useState,useEffect  } from 'react';
import axios from 'axios';
import { Routes,Route,useLocation,useNavigate} from 'react-router-dom';
/////////////////////////////////////////////////////////
//logica del elemento



/////////////////////////////////////////////////////////
//funcion retornada

function App() {
  return (
    <div className={style.App}>

      {path !== '/'&& <Nav logout={logout} onSearch= {onSearch}/>} {/*la nav se muestra en todas las rutas excepto en  landing*/}
      
      <Routes>

        <Route
          path='/' element={<Landing login={login}/>} 
        />
        
        <Route
          path='/home' element={<Cards characters={characters} onClose={onClose}/>} 
        /> 

        {/* para usar esta ruta, es necesario guardar el estado access en local storage 
        {path !== '/' && path !== '/home' && path !== '/about' && !path.startsWith('/detail') && path !== '/favorites' && <Error />} */}

        <Route
          path='/about' element={<About/>} 
        />

        <Route
          path='/detail/:id' element={<Detail characters={characters}/>} 
        />

        <Route
          path='/create' element={<Create/>} 
        />

      </Routes>
  
    </div>
  );
}

export default App;
