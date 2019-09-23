import React from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie';

const Favourites = ({ favs, onRemoveFav, onClickRandom }) => {
    const randomFav = favs[Math.floor(Math.random() * favs.length)];
    return (
        <div>
            <Link to={{ pathname: "/random-movie", state: { randomFav } }}>
                <button type="submit" onClick={onClickRandom}>Pick favorite</button>
            </Link>
            {favs.map((movie) => {
                return (
                    <Movie
                      movie={movie}
                      key={movie.id}
                      onClickBtn={onRemoveFav}
                      text="Remove from favorite"
                    />
                );
            })}
        </div>
    );
};

export default Favourites;
