import Nav from '../nav/Nav';
import Card from '../card/Card';
import style from './cards.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAllVideogames, updateRenderArray } from '../../redux/actions';
{/***********************************************/}
const Cards = () => {
  
  const dispatch = useDispatch();
  
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  //const toRenderArray = useSelector(state => state.toRenderArray);
  useEffect(() => {
    dispatch(getAllVideogames())
  }, []);
  const allVideogamesArray = useSelector(state => state.allVideogamesArray);


{/***********************************************/}
const onSearch = async (name) => {
  try {
    
    const response = await axios(`http://localhost:3001/videogames/search/?name=${name}`);
    const data = response.data;
      
      if (!data.length) {
        window.alert('Try another name!');
      } else {
        console.log("despachando update render array");
        dispatch(updateRenderArray(data));
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
{/***********************************************/}
  const handleGenresChange=(event)=>{
    setSelectedGenre(event.target.value);
    }
{/***********************************************/}
  const handleSelectedSortOptionChange=(event)=>{
    setSelectedSort(event.target.value);
  }
{/***********************************************/}
  const handleDataSourceChange=(event)=>{
    setSelectedSource(event.target.value);
  }
{/***********************************************/}



console.log(
  "se renderiza "+allVideogamesArray+" "
);
{/***********************************************/}
  return (
    <main className={style.main}>
      <Nav handleGenresChange={handleGenresChange} handleSelectedSortOptionChange={handleSelectedSortOptionChange} handleDataSourceChange={handleDataSourceChange} onSearch={onSearch} />

      <section className={style.cards}>
      {allVideogamesArray.map(
        ({ id, name, genres, background_image,image }) => (
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
