import React from 'react';
import {Card, Badge} from 'react-bootstrap'
import ShowsModal from '../ShowsModal';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewsModal from '../NewsModal';

function ShowsCard({name, vote_average, poster_path, overview,backdrop_path,origin_country, original_name}) {
   const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
    return (
        <Card style={{ width: '18rem', marginTop:'1rem', marginBottom:'2rem' }}>
        <Card.Img variant="top" src={poster_path?  IMG_URL+poster_path: "https://images.unsplash.com/photo-1594434885674-0a15708152bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}/>
        <Card.Body>
          <Card.Title>{name}
          <Badge bg="info" style={{marginLeft: '1em'}}>{vote_average}
          <FontAwesomeIcon style={{marginLeft:'0.25em'}} icon={faStar}/>
          </Badge>
          </Card.Title>
          <ShowsModal name={name} backdrop_path={backdrop_path} origin_country={origin_country} original_name={original_name} overview={overview}/>
          <NewsModal name={name}/>
        </Card.Body>
      </Card>
    )
}

export default ShowsCard
