import { GET_VIDEOGAMES,POST_VIDEOGAME } from "./action-types.js"


const initialState={
    allVideogamesArray:[
        // {
        //     "id":1,
        //     "name":"diego",
        //     "image":"https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        //     "genres":[
        //         {"name":"accion"},{"name":"aventura"}
        //     ]
        // },
        // {
        //     "id":2,
        //     "name":"dani",
        //     "image":"https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        //     "genres":[
        //         {"name":"mesa"},{"name":"family"}
        //     ]
        // },
        // {
        //     "id":3,
        //     "name":"lolo",
        //     "image":"https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
        //     "genres":[
        //         {"name":"casa"},{"name":"parque"}
        //     ]
        // }
    ]
};

const reducer = (
    state = initialState,
    { type, payload })=>{

    switch(type){

        case GET_VIDEOGAMES:
            return{
                ...state,
                allVideogamesArray:payload
            }


       default:return{...state}
        
    }
};

export default reducer