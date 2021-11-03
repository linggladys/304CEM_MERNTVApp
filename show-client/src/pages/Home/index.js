import React, { useEffect, useContext } from 'react'
import AppJumbotron from '../../components/Jumbotron';
import axios from 'axios';
import ShowsContainer from '../../components/ShowsContainer';
import { MyContext } from '../../context';
import './styles.css'

function Home() {
      // use when want to fetch all the shows (EffectHook)
const {results, setResults} = useContext(MyContext);
// we need results(shows) to have the context

  const api_key='cb6ef6e0d8b4c779d0dfc67a81325f07';
  useEffect(() => {
   axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&sort_by=popularity.desc`)
  //  .then((data)=>console.log(data)); -->use this for testing
  .then(({data}) =>setResults(data.results))
  .catch(error => console.log(error));
  }, [])
    return (
        <div className="Home">
            <AppJumbotron/>
            <ShowsContainer results={results} />
        </div>
    )
}

export default Home
