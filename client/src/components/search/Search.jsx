import style from './search.module.css';

 function Search(props) {
   return (
      <main className={style.search}>
        <h5>search:</h5>
         <input type="text" />
      </main>
   );
}

export default Search;