import React from 'react';
import ShowsCard from '../ShowsCard';

import './styles.css';

function ShowsContainer({ results }) {
    return (
        <div className="shows-container">
            {results.map ((result =>
             <ShowsCard key={result.id} {...result}/>
             ))}
        </div>
     )
}

export default ShowsContainer
