import { NavLink } from 'react-router-dom';
import style from './card.module.css';

const Card = ({ id, name, genres, image }) => {
  let gensNames = ""
  if(genres){ 
    if(!toString(id).includes('-'))
    {gensNames=genres.map(gen => gen.name).join(", ")
    }

    if(toString(id).includes('-')){
    gensNames=genres.join(", ")}
  };  

  return (
    <div className={style.card}>
      <NavLink className={style.image} to={`/detail/${id}`}>
        <img src={image} alt='Img' />
      </NavLink>
  
      <section className={style.nameContainer}>

        <NavLink className={style.name} to={`/detail/${id}`}>
          {name}
        </NavLink>

        <h3 className={style.genres}>
        {gensNames}
        </h3>

      </section>
  
      
    </div>
  );
}

export default Card;
