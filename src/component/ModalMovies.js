import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { useRef } from 'react';
export default function ModalMovies(props) {
  const src = `https://image.tmdb.org/t/p/w500${props.moviess.poster_path}`
  let commentRef = useRef()
  function submitHandler(event) {
    event.preventDefault()
    let userComment = commentRef.current.value
    let newMovie = { ...props.moviess, userComment }

    props.commentHandler(newMovie, newMovie.id)
  }


  async function addToFavHandler(event, moviess) {
    event.preventDefault()
    let url = `${process.env.REACT_APP_SERVER_URL}/addMovies`

    let data = {
      movie: props.moviess.title,
      comment: props.moviess.comment





    }


    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const databaseData = await response.json()
    console.log(11111, databaseData)




  }







  return (
    <>

      <Modal show={props.show} onHide={props.handleClose} id='mod'>
        <Modal.Header closeButton>
          <Modal.Title>{props.moviess.title}</Modal.Title>
        </Modal.Header>
        <img src={src} alt={props.moviess.title} />
        {props.moviess.comment ? props.moviess.comment : "no"}
        <Modal.Body>


          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comment</Form.Label>
              <Form.Control ref={commentRef} type="text" placeholder="enter your comment" />
              <Form.Text className="text-muted">

              </Form.Text>
            </Form.Group>


            <Button variant="primary" type="submit" onClick={(event) => submitHandler(event)}>
              Submit
            </Button>


            <Button variant="primary" type="submit" onClick={(event) => addToFavHandler(event)} >
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

