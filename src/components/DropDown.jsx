import React from 'react';

const DropDown = ({ genres, onChange }) => {
    return (
        <div>
            <select onChange={onChange}>
                <option key={1}>All</option>
                {genres.map((genre) => {
                    return (
                        <option key={genre}>{genre}</option>
                    );
                })}
            </select>
        </div>
    );
};

export default DropDown;
