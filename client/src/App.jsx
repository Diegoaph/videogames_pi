import style from './App.module.css';
import { useState,useEffect  } from 'react';
import { Routes,Route,useLocation,useNavigate} from 'react-router-dom';
import Cards from './components/cards/Cards.jsx';
import Create from './components/create/Create.jsx';
import Landing from './components/landing/Landing.jsx';
import Detail from './components/detail/Detail.jsx';
import Error from './components/error/Error.jsx';


const App=()=> {
  const location = useLocation();
   const navigate = useNavigate();
   const path = location.pathname
   const [ vgs100,setVgs100 ]= useState([]);
  return (
    <main className={style.app}>

               

      <Routes>

      <Route
        path='/' element={<Landing/>} 
      />


      <Route
        path='/home' element={<Cards/>} 
      />

       
      <Route
        path='/detail/:id' element={<Detail/>} 
      />

      <Route
        path='/create' element={<Create/>} 
      /> 

      </Routes>

      
      {path !== '/' && path !== '/home' && path !== '/create' && !path.startsWith('/detail')  && <Error />}
    </main>
  );
}

export default App;
