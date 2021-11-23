import React from 'react';

import s from './Home.module.css'

import Search from "../../components/Search";

const Home = ({handleSearch, searchInput, error, weather, loader}) => {
    // console.log(weather)
    return (
        <div className={s.main_block}>
            <div className={s.search_block}>
                <Search handleSearch={handleSearch} searchInput={searchInput}/>
            </div>
        </div>
    );
};

export default Home;