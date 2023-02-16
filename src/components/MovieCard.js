import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <>
      {/* {movie?.length > 0  ?  */}

      <div className="movie">
        <div className="divForTitle">
          <p className="pTitle">{movie.Title}</p>
        </div>
        <div className="divForImg">
          <img
          className="imgMovie"
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt="image"
          />
        </div>
        <div className="movieInfo">
          <span className="year">{movie.Year}</span>
          <h3 className="h3MovieType">{movie.Type}</h3>
        </div>
      </div>

      {/* } */}
    </>
  );
};

export default MovieCard;
