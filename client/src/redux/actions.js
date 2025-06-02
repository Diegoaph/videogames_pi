import axios from "axios";
import {
    GET_VIDEOGAMES,
    // POST_VIDEOGAME,
    UPDATE_RENDER_ARRAY,
} from "./action-types";

export const getAllVideogames = () => {
    return async function (dispatch) {
        const apiData = await axios.get(`/videogames`);

        const allVideogamesArray = apiData.data;
        dispatch({
            type: GET_VIDEOGAMES,
            payload: allVideogamesArray,
        });
    };
};

export const updateRenderArray = (newArray) => {
    return {
        type: UPDATE_RENDER_ARRAY,
        payload: newArray,
    };
};
