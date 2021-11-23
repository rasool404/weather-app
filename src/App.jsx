import React, {useRef, useState} from 'react'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import Home from "./layouts/Home/Home";
import Information from "./layouts/Information";
import Favourites from "./layouts/Favourites";
import Header from "./components/Header";
import {API_key} from "./utils/consts";


const App = () => {
    const searchInput = useRef()

    const [error, setError] = useState()
    const [weather, setWeather] = useState([])
    const [loader, setLoader] = useState(false)

    const handleSearch = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.current}&appid=${API_key}`)
            const result = await response.json()
            setWeather('aaa')
            console.log(weather)
        } catch {
            setError('Invalid country name')
        }
    };

    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home handleSearch={handleSearch} searchInput={searchInput}/>}
                       error={error} weather={weather} loader={loader}/>
                <Route exact path="/information" element={<Information/>}/>
                <Route exact path="/favourites" element={<Favourites/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </Router>
    );
}

export default App;

