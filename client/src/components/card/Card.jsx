import { NavLink } from 'react-router-dom';
import style from './card.module.css';

const Card = ({ id, name, genres, image }) => {
  const gensNames = genres ? genres.map(gen => gen.name).join(", ") : ""; // Verificar si genres es undefined

  return (
    <div className={style.card}>
      <NavLink className={style.image} to={`/detail/${id}`}>
        <img src={image} alt='Img' />
      </NavLink>
  
      <h2 className={style.nameContainer}>
        <NavLink className={style.name} to={`/detail/${id}`}>
          {name}
        </NavLink>
      </h2>
  
      <h3 className={style.genres}>
        {gensNames}
      </h3>
    </div>
  );
}

export default Card;
