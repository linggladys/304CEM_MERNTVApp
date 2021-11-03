import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState, useContext } from 'react'
import {InputGroup, FormControl,Button } from 'react-bootstrap'
import { MyContext } from '../../context';
import './styles.css';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

function AppJumbotron() {
    // const {count} = useContext (MyContext);
    const [searchInput, setSearchInput] = useState("");
    const {setResults} = useContext (MyContext);

    // console.log(count);

    function handleSearch(search){
        const apiKey = `cb6ef6e0d8b4c779d0dfc67a81325f07`;
        // here it needs to have some way making request to our state
        // set the context from context.js in src folder
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${searchInput}&include_adult=false`)
        .then(({data}) => setResults (data.results))
        
    }
    return (
        <div className="jumbotron">
            <h1 className="text-light">Search a TV Show of your choice</h1>
            <div className="button-input">
        <InputGroup className="mb-3 button-input">
            
            <FormControl
                placeholder="Search for a show"
                aria-label="Show Search Input"
                aria-describedby="show-search-button"
                value={searchInput}
                onChange={(e) =>setSearchInput(e.target.value)}
            />
            <Button variant="info" id="show-search-button" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch}/> 
            </Button>
        </InputGroup>
        </div>
  </div>
    )
}

export default AppJumbotron
