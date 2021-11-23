import React from 'react';
import {FormControl, InputGroup} from "react-bootstrap";

const Search = ({handleSearch, searchInput}) => {
    return (
        <form style={{width: '50%'}} onSubmit={(e) => handleSearch(e)}>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Поиск (по названию города)"
                    onChange={(e) => searchInput.current = e.target.value}
                />
            </InputGroup>
        </form>
    );
};

export default Search;