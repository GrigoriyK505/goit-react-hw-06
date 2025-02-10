import s from './SearchBox.module.css';
import React from 'react';


const SearchBox = ({ handleSearchChange, value }) => {
    return (
        <input type="text"
            value={value}
            onChange={handleSearchChange}
            className={s.search}
            placeholder="Search contacts..."/>
    );
}

export default SearchBox;