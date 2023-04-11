import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovies from './ModalMovies';
import { useState } from 'react';
export default function SingleMovie(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const src = `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`
    return (<>


        <Card style={{ width: '18rem' }} id='card'>
            <Card.Img variant="top" src={src} id='img' />
            <Card.Body>
                <Card.Title>{props.movie.title}</Card.Title>
                <Card.Text>
                    {props.movie.release_date
                    }
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>Show details</Button>
            </Card.Body>
        </Card >
        <ModalMovies show={show} handleClose={handleClose} moviess={props.movie} commentHandler={props.commentHandler} />





    </>)



}