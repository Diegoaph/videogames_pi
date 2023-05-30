import style from './create.module.css'
import { useState } from "react";
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
            <h1>formulario para crear VG</h1>
            <input type="text"  />
           <input type="checkbox"  />
           <input type="radio"  />
           <br />
            <input type="text"  />
           <input type="checkbox"  />
           <input type="radio"  />
           <br />
            <input type="text"  />
           <input type="checkbox"  />
           <input type="radio"  />
         
           
        </form>
        

    )

}
export default Create;