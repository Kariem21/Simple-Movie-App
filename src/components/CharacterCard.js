import React from "react";

const CharacterCard = ({ movie }) => {
  return (
    <>
      {/* {movie?.length > 0  ?  */}

      <div className="movie">
        <div className="divForTitle">
          <p className="pTitle">{movie.name}</p>
        </div>
        <div className="divForImg">
          <img
          className="imgMovie"
            src={
              movie.images.md !== "N/A"
                ? movie.images.md
                : "https://via.placeholder.com/400"
            }
            alt="image"
          />
        </div>
        <div className="movieInfo">
          <span className="year">publisher <span className="firstApperance">({movie.biography.publisher})</span></span>
          {/* <span className="h3MovieType">First Apperrance <span className="firstApperance">({movie.biography.firstAppearance})</span></span> */}
        </div>
      </div>

      {/* } */}
    </>
  );
};

export default CharacterCard;
