import style from './nav.module.css';
import Search from "../search/Search.jsx"

 function Nav(props) {
   return (
      <main className={style.nav}>
         <h1>nav</h1>
         <Search/>
         <button>botoncito</button>
      </main>
   );
}

export default Nav;