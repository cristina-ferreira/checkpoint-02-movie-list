import React, { Component } from 'react';
import MoviesList from './MoviesList';
import Favourites from './Favourites';
import DropDown from './DropDown';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genres: [],
            movies: [],
            favs: [],
            selectedGenre: 'All'
        };
    }

    componentDidMount() {
        this.LoadMovies();
    }

    LoadMovies = () => {
        fetch(`https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json`)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    genres: data.genres,
                    movies: data.movies
                });
            });
    }

    handleAddFav = (movie) => {
        const { favs } = this.state;
        if (favs.includes(movie)) return;
        this.setState((state) => {
            return ({
                favs: [...state.favs, movie]
            });
        });
    }

    handleRemoveFav = (movie) => {
        const { favs } = this.state;
        const filteredMovies = favs.filter((m) => {
            return movie.id !== m.id;
        });
        this.setState({
            favs: filteredMovies
        });
    }

    handleChangeGenre = (e) => {
        this.setState({
            selectedGenre: e.target.value
        });
    }

    render() {
        const { movies, favs, genres, selectedGenre } = this.state;
        const filteredMovies = () => {
            if (selectedGenre === 'All') return movies;
            return movies.filter((m) => {
                return m.genres.includes(selectedGenre);
            });
        };

        return (
            <div>
                <DropDown genres={genres} onChange={this.handleChangeGenre} />
                {favs.length !== 0 &&
                    <Favourites favs={favs} onRemoveFav={this.handleRemoveFav} />
                }
                <MoviesList movies={filteredMovies()} onAddFav={this.handleAddFav} />
            </div>
        );
    }
}

export default App;
