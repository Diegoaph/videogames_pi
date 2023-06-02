import Nav from '../nav/Nav'
import Card from '../card/Card'
import style from './cards.module.css';
import { useSelector } from 'react-redux';


import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllVideogames } from '../../redux/actions';



const Cards = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(getAllVideogames())
  },[])
  

 const allVideogamesArray = useSelector(state=>state.allVideogamesArray)
 return (
    <main className={style.main}>
      <Nav />
      
      <section className={style.cards}>
        {allVideogamesArray.map(({ id, name, genres, background_image }) => (

          <div className={style.card}>
          <Card
              key={id}
              id={id}
              name={name}
              genres={genres}
              image={background_image}
            />
          </div>
        ))}
      </section>
      
      <section className={style.paginado}>
        <p> ⇤ ← 1 2 3 4 5 → ⇥</p>
      </section>
    </main>
  );
}

export default Cards;
