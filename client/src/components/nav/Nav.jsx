import style from "./nav.module.css";
import Search from "../search/Search.jsx";
import { NavLink } from "react-router-dom";
import {
    handleGenresChange,
    handleSelectedSortOptionChange,
    handleDataSourceChange,
} from "../cards/Cards";
import { useSelector, useDispatch } from "react-redux";
import { updateRenderArray } from "../../redux/actions";

function Nav(props) {
    const toRenderArray = useSelector((state) => state.toRenderArray);
    const allVideogamesArray = useSelector((state) => state.allVideogamesArray);
    const dispatch = useDispatch();
    return (
        <main className={style.nav}>
            <section className={style.searchcreate}>
                <div className={style.searchdiv}>
                    <Search onSearch={props.onSearch} />
                    <button
                        className={style.button}
                        onClick={() => {
                            dispatch(updateRenderArray(allVideogamesArray));
                        }}>
                        Show all
                    </button>
                </div>

                <button className={style.button}>
                    <NavLink
                        className={style.create}
                        to="/create">
                        Create
                    </NavLink>
                </button>
            </section>

            <section className={style.filters}>
                {toRenderArray.length < 20 ? (
                    <></>
                ) : (
                    <select
                        className={style.desplegable}
                        defaultValue="all"
                        onChange={props.handleGenresChange}>
                        <option value="all">Genres</option>
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
                        <option value="Massively Multiplayer">
                            Massively Multiplayer
                        </option>
                        <option value="Racing">Racing</option>
                        <option value="Sports">Sports</option>
                        <option value="Fighting">Fighting</option>
                        <option value="Family">Family</option>
                        <option value="Board Games">Board Games</option>
                        <option value="Educational">Educational</option>
                        <option value="Card">Card</option>
                    </select>
                )}

                <select
                    className={style.desplegable}
                    onChange={props.handleSelectedSortOptionChange}
                    defaultValue="default">
                    <option value="default">Sort</option>
                    <option value="RatingD">Mayor Rating</option>
                    <option value="RatingA">Menor Rating</option>
                    <option value="AlfaD">A-Z</option>
                    <option value="AlfaA">Z-A</option>
                </select>

                <select
                    onChange={props.handleDataSourceChange}
                    className={style.desplegable}
                    defaultValue="all">
                    <option value="all">All sources</option>
                    <option value="API">From API</option>
                    <option value="DB">From DataBase</option>
                </select>
            </section>
        </main>
    );
}
export default Nav;
