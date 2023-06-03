import style from './search.module.css';
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

 function Search(props) {

   const [ search,setSearch ]= useState("");
   const navigate = useNavigate();
   const handleChange = (event)=>{
      setSearch(event.target.value);
   }

   const handleKeyUp = (event) => {
      if (event.keyCode === 13) { // 13 es el codigo de la tecla enter
         props.onSearch(search);
         setSearch("");
      }
   }


   return (
      <main className={style.search}>
         <div >
            <input type="search" placeholder='SEARCH' className={style.input} onChange={handleChange} onKeyUp={handleKeyUp} value={search} />
         </div>
      </main>
   );
}

export default Search;