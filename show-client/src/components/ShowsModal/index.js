import React, {useState} from 'react';
import {Modal, Button, Image} from 'react-bootstrap';
import {faTv} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ShowsModal({name,backdrop_path, origin_country,original_name,overview}) {
   
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const IMG_URL_BACKDROP="https://image.tmdb.org/t/p/w500/";
      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Show TV Info
              <FontAwesomeIcon icon={faTv}/>
            </Button>
             
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Image src={backdrop_path?  IMG_URL_BACKDROP+backdrop_path: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"} fluid/>
                  Original title: {original_name}
                  <br />
                  Origin country: {origin_country}
                  <br />
                  Overview: {overview}
                  <hr />
              </Modal.Body>
            </Modal>
          </>
        );
      }


export default ShowsModal;
