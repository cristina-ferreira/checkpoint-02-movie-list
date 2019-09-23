import React from 'react';

const Movie = ({ movie, onClickBtn, text }) => {
    const handleClickBtn = () => {
        onClickBtn(movie);
    };
    return (
        <div className="movie">
            <p><span className="legend">title:</span> {movie.title}</p>
            <p><span className="legend">director:</span> {movie.director}</p>
            <span className="legend">genres:</span> {movie.genres.map(genre => <span key={genre}>{genre} </span>)}
            <button type="button" onClick={handleClickBtn}>{text}</button>
        </div>
    );
};

export default Movie;
