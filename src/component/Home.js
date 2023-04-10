import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import MovieList from './MovieList';



export default function Home() {
    const [movies, setMovies] = useState([])

    async function getmovies() {
        const url = process.env.REACT_APP_SERVER_URL
        console.log(111, url)
        const response = await fetch(`${url}/trending`)
        console.log(222, response)
        const dataJson = await response.json()
        console.log(3333, dataJson)
        setMovies(dataJson)
        console.log(44444, movies)


    }
    function commentHandler(newMovie, id) {
        movies.map(movie => {
            if (movie.id == id) {
                movie.comment = newMovie.userComment
                return movie
            }
            else {
                return movie


            }

        })

    }

    useEffect(() => {
        getmovies();
    }, [])


    return (
        <>






            <MovieList movies={movies} commentHandler={commentHandler} />



        </>

    )

}