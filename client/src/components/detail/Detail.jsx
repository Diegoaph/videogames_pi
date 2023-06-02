import { NavLink, useParams } from 'react-router-dom';
import style from './detail.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Detail = () => {
  const params = useParams();
  const [VG, setVG] = useState({});

  const URL = 'http://localhost:3001';

  useEffect(() => {
    const getData = async () => {
      try {
        const apiData = await axios(`${URL}/videogames/id/${params.id}`);
        const data = apiData.data;

        if (data.name) {
          setVG(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      } catch (error) {
        console.error(error);
        window.alert('Ocurrió un error al cargar los datos');
      }
    };

    getData();

    return () => {
      setVG({});
    };
  }, [params.id]);

  const renderHTML = (html) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };
  
  return (
    <div className={style.detail}>
      <header className={style.header}>
        <button className={style.button}>
          <NavLink className={style.home} to="/home">
            ←
          </NavLink>
        </button>
        <h1 className={style.h1}>{VG.name}</h1>
      </header>

      <main className={style.data}>
        <img  className={style.image} src={VG.image} alt={VG.name} />
        <div className={style.overlay}>
          <aside className={style.info}>
          <h3>It's a ⭐{VG.rating} Stars⭐ rated!</h3>
            <h3>Play it on {VG.platforms?.join(", ")}</h3>
            
            <h3>Released at {VG.released}</h3>
            <p>{VG.genres?.join(", ")}</p>

            
          </aside>
          
        </div>
      </main>
      <section className={style.description}>
        <h2>Read more about {VG.name}:</h2>
        {renderHTML(VG.description)}
      </section>
    </div>
  );
};

export default Detail;
