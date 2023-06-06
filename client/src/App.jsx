import style from './App.module.css';
import { Routes,Route,useLocation} from 'react-router-dom';
import Cards from './components/cards/Cards.jsx';
import Create from './components/create/Create.jsx';
import Landing from './components/landing/Landing.jsx';
import Detail from './components/detail/Detail.jsx';
import Error from './components/error/Error.jsx';


const App=()=> {
  const location = useLocation();
   const path = location.pathname
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
