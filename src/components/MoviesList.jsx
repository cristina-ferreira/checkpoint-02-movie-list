/* eslint-disable react/jsx-indent-props */
import React from 'react';
import Movie from './Movie';

const MoviesList = ({ movies, onAddFav }) => {
    return (
        <div>
            <h3 className="title">Movies:</h3>
            {movies.map((movie) => {
                return (
                    <Movie
                        movie={movie}
                        key={movie.id}
                        onClickBtn={onAddFav}
                        text="Add to favorite"
                    />
                );
            })}
        </div>
    );
};

export default MoviesList;
