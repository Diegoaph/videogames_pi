import style from './create.module.css'
import { useState } from "react";
import { NavLink } from 'react-router-dom';
//import validation from '../validation/Validation.js';

const Create = ({/*{login}*/}) => {
    
    // const [errors,setErrors]=useState({})
    // const [userData, setUserData]=useState({
    //     email:'',password:''
    // })

    

    // const handleChange = (event)=>{
    //     setUserData({
    //         ...userData,[event.target.name]:event.target.value
    // })

    // const validateErrors = validation({
    //     ...userData,[event.target.name]:event.target.value
    // })

    //     setErrors(validateErrors)

      
    // }

    

    // const handleOnSubmit =(event)=>{
    //     event.preventDefault()
    //     login(userData)
    // }

    return(
        
    <form className={style.create}>

        <header className={style.header}>
            <button className={style.button}>
                <NavLink className={style.home} to='/home'>
                    ←
                </NavLink>
            </button>

            <h1 className={style.h1}>Create new Videogame file</h1>
        </header>

        <main>
            <label className={style.label} htmlFor="name">
                Name:
            </label> 
            <input className={style.input} type="text" name="name" placeholder="Videogame Name"/><hr />

            <label className={style.label} htmlFor="description">
                Description:
            </label> 
            <textarea className={style.input} type="textarea" name="description" placeholder="Videogame Description"/><hr />

            <label className={style.label} htmlFor="platforms">
                Platforms:
            </label> 
            <select  className={style.multiple} multiple defaultValue="filterBy" > 
               <option disabled value="filterBy">
                  Select platforms
               </option>
            <option value="PC">PC</option>
            <option value="PlayStation 5">PlayStation 5</option>
            <option value="PlayStation 4">PlayStation 4</option>
            <option value="Xbox One">Xbox One</option>
            <option value="Xbox Series S/X">Xbox Series S/X</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
            <option value="iOS">iOS</option>
            <option value="Android">Android</option>
            <option value="Nintendo 3DS">Nintendo 3DS</option>
            <option value="Nintendo DS">Nintendo DS</option>
            <option value="Nintendo DSi">Nintendo DSi</option>
            <option value="macOS">macOS</option>
            <option value="Linux">Linux</option>
            <option value="Xbox 360">Xbox 360</option>
            <option value="Xbox">Xbox</option>
            <option value="PlayStation 3">PlayStation 3</option>
            <option value="PlayStation 2">PlayStation 2</option>
            <option value="PlayStation">PlayStation</option>
            <option value="PS Vita">PS Vita</option>
            <option value="PSP">PSP</option>
            <option value="Wii U">Wii U</option>
            <option value="Wii">Wii</option>
            <option value="GameCube">GameCube</option>
            <option value="Nintendo 64">Nintendo 64</option>
            <option value="Game Boy Advance">Game Boy Advance</option>
            <option value="Game Boy Color">Game Boy Color</option>
            <option value="Game Boy">Game Boy</option>
            <option value="SNES">SNES</option>
            <option value="NES">NES</option>
            <option value="Classic Macintosh">Classic Macintosh</option>
            <option value="Apple II">Apple II</option>
            <option value="Commodore / Amiga">Commodore / Amiga</option>
            <option value="Atari 7800">Atari 7800</option>
            <option value="Atari 5200">Atari 5200</option>
            <option value="Atari 2600">Atari 2600</option>
            <option value="Atari Flashback">Atari Flashback</option>
            <option value="Atari 8-bit">Atari 8-bit</option>
            <option value="Atari ST">Atari ST</option>
            <option value="Atari Lynx">Atari Lynx</option>
            <option value="Atari XEGS">Atari XEGS</option>
            <option value="Genesis">Genesis</option> <option value="SEGA Saturn">SEGA Saturn</option>
            <option value="SEGA CD">SEGA CD</option>
            <option value="SEGA 32X">SEGA 32X</option>
            <option value="SEGA Master System">SEGA Master System</option>
            <option value="Dreamcast">Dreamcast</option>
            <option value="3DO">3DO</option>
            <option value="Jaguar">Jaguar</option>
            <option value="Game Gear">Game Gear</option>
            <option value="Neo Geo">Neo Geo</option>
            <option value="Web">Web</option>
            </select><hr />

            <label className={style.label} htmlFor="image">
                Image:
            </label> 
            <input className={style.input} type="text" name="image" placeholder=".jpg .png .svg"/><hr />

            <label className={style.label} htmlFor="release">
                Release Date:
            </label> 
            <input className={style.input} type="date" name="release" placeholder="YYY/MM/DD"/><hr />

            <label className={style.label} htmlFor="genres">
                Genres:
            </label> 
            <select  className={style.multiple} multiple defaultValue="filterBy" > 
               <option disabled value="filterBy">
                  Select Genres
               </option>
               <option value="Indie">Indie</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Strategy">Strategy</option>
            <option value="RPG">RPG</option>
            <option value="Simulation">Simulation</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Arcade">Arcade</option>
            <option value="Shooter">Shooter</option>
            <option value="Casual">Casual</option>
            <option value="Platformer">Platformer</option>
            <option value="Massively Multiplayer">Massively Multiplayer</option>
            <option value="Racing">Racing</option>
            <option value="Sports">Sports</option>
            <option value="Fighting">Fighting</option>
            <option value="Family">Family</option>
            <option value="Board Games">Board Games</option>
            <option value="Educational">Educational</option>
            <option value="Card">Card</option>
            </select><hr />
            
            <label className={style.label} htmlFor="rating">
                Rating:
            </label> 
            <input className={style.input} type="number" name="rating" placeholder="rate 1 to 10"/><hr />
            <button>Create</button>
            
            
            
            
            

        </main> 
    </form>
    

    )

}
export default Create;