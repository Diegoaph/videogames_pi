import { NavLink } from 'react-router-dom';
import style from './landing.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllVideogames } from '../../redux/actions';


 const Landing=() =>{

const dispatch = useDispatch();
useEffect(()=>{
   dispatch(getAllVideogames())
},[])



   return (
      <main className={style.landing}>
         <section className={style.body}>
            <h1 className={style.h1}>Press Start to enter the greatest library of videogames!</h1>

               <button className={style.innerbutton} >
                  <NavLink className={style.start}  to='/home'>
                      Start 
                  </NavLink>
               </button>
         </section>
      </main>
   );
}

export default Landing;