import {
    GET_VIDEOGAMES,
    // POST_VIDEOGAME,
    UPDATE_RENDER_ARRAY,
} from "./action-types";

const initialState = {
    allVideogamesArray: [],
    toRenderArray: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_RENDER_ARRAY:
            return {
                ...state,
                toRenderArray: payload,
            };

        case GET_VIDEOGAMES:
            return {
                ...state,
                allVideogamesArray: payload,
                toRenderArray: payload,
            };

        default:
            return { ...state };
    }
};

export default reducer;
