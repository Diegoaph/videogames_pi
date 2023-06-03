import Nav from '../nav/Nav';
import Card from '../card/Card';
import style from './cards.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAllVideogames, updateRenderArray } from '../../redux/actions';

const Cards = () => {
  const dispatch = useDispatch();
  const allVideogamesArray = useSelector(state => state.allVideogamesArray);
  const toRenderArray = useSelector(state => state.toRenderArray);
  const [searchArray, setSearchArray] = useState([]);

  useEffect(() => {
    dispatch(getAllVideogames());
  }, []);

  const onSearch = async (name) => {
    try {
      const response = await axios(`http://localhost:3001/videogames/search/?name=${name}`);
      const data = response.data;
      console.log(data)
  
      if (!data.length) {
        window.alert('Try another name!');
      } else {
        setSearchArray(data);
        dispatch(updateRenderArray(data));
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <main className={style.main}>
      <Nav onSearch={onSearch} />

      <section className={style.cards}>
      {(toRenderArray.length ? toRenderArray : allVideogamesArray).map(({ id, name, genres, background_image,image }) => (
          <div className={style.card} key={id}>
            <Card
              id={id}
              name={name}
              genres={genres}
              image={background_image || image}
            />
          </div>
        ))}
      </section>

      <section className={style.paginado}>
        <p> ⇤ ← 1 2 3 4 5 → ⇥</p>
      </section>
    </main>
  );
};

export default Cards;
