import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import { FaSistrix } from "react-icons/fa";
import "../App.css";
import CharacterCard from "./CharacterCard";
const MoviePage = () => {
  // https://fakestoreapi.com/products
  // https://www.omdbapi.com/?i=tt3896198&apikey=e2381709
  const Api_Url = "https://www.omdbapi.com/?i=tt3896198&apikey=e2381709";
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [searchTerm3, setSearchTerm3] = useState("");

  const [movies, setMovies] = useState([]);
  const [van, setVan] = useState([]);
  const [hero, setHero] = useState([]);

  const searchMovie = async (title) => {
    const response = await fetch(`${Api_Url}&s=${title}`);

    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };
  const api = async (title) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a35448b47emsh9f0c8cc583b4fedp13c849jsn6874c09a85f3",
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      },
    };

    await fetch("https://superhero-search.p.rapidapi.com/api/heroes", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log("from api");
        setHero(response);
      })
      .catch((err) => console.error(err));
  };
  //   For hero
  const api2 = async (title) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a35448b47emsh9f0c8cc583b4fedp13c849jsn6874c09a85f3",
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      },
    };

    await fetch("https://superhero-search.p.rapidapi.com/api/villains", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log("from api2");
        setVan(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    searchMovie("Batman");
    api(searchTerm2);
    api2(searchTerm3);
  }, []);
  return (
    <>
      <div className="allMovie">
        <h1 className="first-h1"> Movie App</h1>

        <div className="Search">
          <input
            className="search-input"
            placeholder="Search For Movie"
            onChange={(e) => {
              setSearchTerm1(e.target.value);
              console.log(e.target.value);
            }}
            value={searchTerm1}
          />
          <FaSistrix
            className="search-icon"
            onClick={() => {
              searchMovie(searchTerm1);
            }}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="allMovies">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2 className="empty-h2"> Enter Movie's Name</h2>
          </div>
        )}
        {/* Second Search */}
        {/* <div className="Search">
          <input
            className="search-input"
            placeholder="Search For Character"
            onChange={(e) => {
              setSearchTerm2(e.target.value);
              console.log(e.target.value);
            }}
            value={searchTerm2}
          />
          <FaSistrix
            className="search-icon"
            onClick={() => {
              setHero(searchTerm2);
            }}
          />
        </div> */}
        <h2 className="h2">Some Random Special Characters</h2>

        {hero?.length > 0 ? (
          <div className="allMovies">
            {hero.map((movie) => (
              <CharacterCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2 className="empty-h2"> Enter Character's Name</h2>
          </div>
        )}
        {/* Third Api */}

        {van?.length > 0 ? (
          <div className="allMovies">
            {van.map((movie) => (
              <CharacterCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty"></div>
        )}
      </div>
    </>
  );
};

export default MoviePage;
