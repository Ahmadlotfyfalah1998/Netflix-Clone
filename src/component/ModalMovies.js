import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { useRef } from 'react';
export default function ModalMovies(props) {
  const src = `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`
  let commentRef = useRef()
  function submitHandler(event) {
    event.preventDefault()
    let userComment = commentRef.current.value
    let newMovie = { ...props.movie, userComment }
    
    props.commentHandler(newMovie, newMovie.id)
  }
  async function addToFavHandler(event,movie){
    event.preventDefault()
let url =`${process.env.REACT_APP_SERVER_URL}/addMovies`
let data={
  title:props.movie.title,
  comment:props.movie.comment,
  poster_path:props.movie.poster_path,
  id:props.movie.id




}
const response= await fetch(url,{
  method:"POST",
  headers :{
     "Content-Type": "application/json",
    },
body: JSON.stringify(data),
})

const databaseData= await response.json()

console.log(databaseData)



}







  return (
    <>

      <Modal show={props.show} onHide={props.handleClose} id='mod'>
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.title}</Modal.Title>
        </Modal.Header>
        <img src={src} alt={props.movie.title} />
        {props.movie.comment ? props.movie.comment : "no"}
        <Modal.Body>


          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comment</Form.Label>
              <Form.Control ref={commentRef} type="twxt" placeholder="enter your comment" />
              <Form.Text className="text-muted">

              </Form.Text>
            </Form.Group>


            <Button variant="primary" type="submit" onClick={(event) => submitHandler(event)}>
              Submit
            </Button>


            <Button variant="primary" type="submit"  onClick={(event)=>addToFavHandler(event)} >
              add to fav
            </Button>
          </Form></Modal.Body>
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

