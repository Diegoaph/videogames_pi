import Nav from '../nav/Nav'
import Card from '../card/Card'
import style from './cards.module.css';
let characters=[]

const Cards=(props)=>{
  return (
    <div className={style.main}>
        <Nav></Nav>
        
        <main className={style.cards}>
            <div className={style.fake}></div>
            <div className={style.fake}></div>
            <div className={style.fake}></div>
            <div className={style.fake}></div>
            <div className={style.fake}></div>
            <div className={style.fake}></div><div className={style.fake}></div>
            <div className={style.fake}></div>
            <div className={style.fake}></div><div className={style.fake}></div>
            <div className={style.fake}></div>
            <div className={style.fake}></div><div className={style.fake}></div>
            <div className={style.fake}></div>
            <div className={style.fake}></div>
            {
            characters.map(({id,name,species,gender,image,origin,status})=>{
                  return (
                     <div>
                        <Card
                           key={id} 
                           id={id}
                           name={name} 
                           species={species} 
                           gender={gender} 
                           image={image} 
                           origin={origin.name} 
                           status={status}
                        />
                     </div>
                     
                  )
               }
            )
         }
      
        </main>
        <section className={style.paginado}>
         <p>⇤ 1 2 3 4 5 ⇥</p>
      </section>
     </div>
     
  );
}

export default Cards;