import axios from 'axios';
import{ GET_VIDEOGAMES } from "./action-types"

const URL = 'http://localhost:3001'

export const getAllVideogames =()=>{
    return async function(dispatch){
        const apiData = await axios.get(`${URL}/videogames`);
    
    const allVideogamesArray = apiData.data;
    dispatch(
        {
        type:GET_VIDEOGAMES,
        payload: allVideogamesArray
        }
    )
}}