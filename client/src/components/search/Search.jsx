import style from './search.module.css';

 function Search(props) {
   return (
      <main className={style.search}>
         <div >
            <input type="search" placeholder='SEARCH' className={style.input}/>
         </div>
      </main>
   );
}

export default Search;