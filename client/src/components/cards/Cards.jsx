import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getAllVideogames, updateRenderArray } from "../../redux/actions";
import Nav from "../nav/Nav";
import Card from "../card/Card";
import style from "./cards.module.css";

const Cards = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedSource, setSelectedSource] = useState("");
    const [selectedSort, setSelectedSort] = useState("");
    const allVideogamesArray = useSelector((state) => state.allVideogamesArray);
    const itemsPerPage = 15;
    const totalPages = Math.ceil(allVideogamesArray.length / itemsPerPage);

    useEffect(() => {
        dispatch(getAllVideogames());
    }, [dispatch]);

    const onSearch = async (name) => {
        try {
            const response = await axios.get(
                `/videogames/search/?name=${name}`
            );
            const data = response.data;

            if (!data.length) {
                window.alert("¡Prueba otro nombre!");
            } else {
                dispatch(updateRenderArray(data));
            }
        } catch (error) {
            console.error(
                "Error al obtener los resultados de búsqueda:",
                error
            );
        }
    };

    const handleGenresChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    const handleSelectedSortOptionChange = (event) => {
        setSelectedSort(event.target.value);
    };

    const handleDataSourceChange = (event) => {
        setSelectedSource(event.target.value);
    };

    const handleLast = () => {
        setPage(totalPages);
    };

    const handleNext = () => {
        setPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrev = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleFirst = () => {
        setPage(1);
    };

    let filteredGames = allVideogamesArray.slice();

    if (selectedGenre !== "all" && selectedGenre !== "") {
        filteredGames = filteredGames.filter((game) =>
            game.genres.some((genre) => genre.name === selectedGenre)
        );
    }

    switch (selectedSort) {
        case "RatingD":
            filteredGames = filteredGames
                .slice()
                .sort((a, b) => b.rating - a.rating);
            break;
        case "RatingA":
            filteredGames = filteredGames
                .slice()
                .sort((a, b) => a.rating - b.rating);
            break;
        case "AlfaA":
            filteredGames = filteredGames
                .slice()
                .sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "AlfaD":
            filteredGames = filteredGames
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "default":
            filteredGames = allVideogamesArray.slice();
            break;
        default:
            break;
    }

    switch (selectedSource) {
        case "DB":
            filteredGames = filteredGames.filter(
                (game) => typeof game.id === "string"
            );
            break;
        case "API":
            filteredGames = filteredGames.filter(
                (game) => typeof game.id === "number"
            );
            break;
        case "all":
            filteredGames = allVideogamesArray.slice();
            break;
        default:
            break;
    }

    const finalRender = filteredGames.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    useEffect(() => {
        setPage(1); // Reset page to 1 when changing filters/sorting
    }, [selectedGenre, selectedSort, selectedSource]);

    return (
        <main className={style.main}>
            <Nav
                handleGenresChange={handleGenresChange}
                handleSelectedSortOptionChange={handleSelectedSortOptionChange}
                handleDataSourceChange={handleDataSourceChange}
                onSearch={onSearch}
            />

            <section className={style.cards}>
                {finalRender.map(
                    ({ id, name, genres, background_image, image }) => (
                        <div
                            className={style.card}
                            key={id}>
                            <Card
                                id={id}
                                name={name}
                                genres={genres}
                                image={background_image || image}
                            />
                        </div>
                    )
                )}
            </section>

            <section className={style.paginado}>
                <button
                    className={style.btn}
                    onClick={handleFirst}
                    disabled={page === 1}>
                    ⇤
                </button>
                <button
                    className={style.btn}
                    onClick={handlePrev}
                    disabled={page === 1}>
                    ←
                </button>
                <button
                    className={style.btn}
                    onClick={handleNext}
                    disabled={page === totalPages}>
                    →
                </button>
                <button
                    className={style.btn}
                    onClick={handleLast}
                    disabled={page === totalPages}>
                    ⇥
                </button>
            </section>
        </main>
    );
};

export default Cards;
