import React, {useState,useEffect} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

function NewsModal({name}) {
      // for modal
 
  const[data, setData] =useState([]);
  const [show, setShow] = useState(false);
  const apikey2='IISWQCxXbCLQCQio2kB9ZxwHJkwpLrlpgdwcUzsybr8wV6rp';

 
   
  useEffect(() => {
   const fetchData = async () =>{
     const res = await fetch(
      `https://api.currentsapi.services/v1/search?keywords=${name}&apiKey=${apikey2}`
     );
     const json = await res.json();
     setData (json.news);
   }
   fetchData();
  }, [setData])

        
  const handleClose = () => setShow(false);
  const handleShow = () =>setShow(true);

        return (
          <>
            <Button variant="secondary" style={{marginTop:'0.5rem'}} onClick={handleShow}>
              Show The News
              <FontAwesomeIcon icon={faNewspaper}/>
            </Button>
             
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
              </Modal.Header>
              <Modal.Body className="text-justify">
               <ul>
                   <h4>Latest news from the show</h4>
                    {data.map(item =>(
                    <li key={item.id}>
                        <a href={item.url}>{item.title}</a> by <span className="highlighted">{item.author}</span>
                        <p>{item.description}</p>
                    </li>
                 ))}
               </ul>
              </Modal.Body>
            </Modal>
          </>
        );
    }


export default NewsModal;