import style from './nav.module.css';
import Search from "../search/Search.jsx"
import {Link} from "react-router-dom";

 function Nav(props) {
   return (
      <main className={style.nav}>
         <section>
            <Search/>
         </section>
         <section className={style.elements}>
            <Link to="/home">Home</Link>
            <select >hola</select>
         </section>
         
      </main>
   );
}

export default Nav;