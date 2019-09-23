import React from 'react';

const RandomMovie = (props) => {
    const { location } = props;
    return (
        <div>
            {location.state && location.state.randomFav.title}
        </div>
    );
};

export default RandomMovie;
