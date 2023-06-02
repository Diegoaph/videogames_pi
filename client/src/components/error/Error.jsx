import { NavLink } from 'react-router-dom';
import style from './error.module.css';
 const Error=() =>{
   return (
    <div className={style.bg}>
      <main className={style.error}>
         <section className={style.body}>
            <h1 className={style.h1}>Wrong Way!</h1>

               <button className={style.innerbutton} >
                  <NavLink className={style.home}  to='/home'>
                      Home 
                  </NavLink>
               </button>
         </section>
      </main>
      </div>
   );
}

export default Error;