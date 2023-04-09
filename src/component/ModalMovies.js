import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function ModalMovies(props){
  const src=`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`
return (
    <>
    
    <Modal show={props.show} onHide={props.handleClose} id='mod'>
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.title}</Modal.Title>
        </Modal.Header>
        <img src={src}   alt={props.movie.title}/>
        <Modal.Body><form >
            <input type='text'/>
            <button>send</button>
            </form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}  >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
    
    
    
    </>
)



}