import React from 'react';
import Repository from './RepInfo/Repository';

const RepList = () => {
    return (
        <ul className="repositories__list">
            <Repository />
            <Repository />
            <Repository />
            <Repository />
        </ul>
    );
}

export default RepList;