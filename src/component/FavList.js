import { useState } from "react"
import { useEffect } from "react"
import { Card } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form';
import { Modal } from "react-bootstrap"
import { useRef } from "react"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"

export default function FavList() {
    let commentRef = useRef()
  


    const [favMovies, setFavMovies] = useState([])
    async function getFavMovies() {
        let url = `${process.env.REACT_APP_SERVER_URL}/getMovies`
        let response = await fetch(url, {
            method: 'GET',
        })
        let databaseData = await response.json()
        setFavMovies(databaseData)

    }

    async function handleDelete(id) {
        let url = `${process.env.REACT_APP_SERVER_URL}/deleteMovie/${id}`
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },

        })
        let databaseData2 = await response.json()

        getFavMovies()
    }







    async function updteFavHandler(id) {
        
        let userComment = commentRef.current.value
        
        let url = `${process.env.REACT_APP_SERVER_URL}/updateMovie/${id}`
     
    console.log(userComment)
        let data = {
            movie:databaseData.movie,
          comment:userComment
          
        }
        console.log(data)
    
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
    
        const databaseData = await response.json()
        
    
    
    
    
       }








    useEffect(() => {

        getFavMovies()
        console.log(favMovies)


    }, [])
    return (
        <>
            {
                favMovies && favMovies.map(movier => {
                    return (
                        <>
                            <Card style={{ width: '18rem' }} id='card'>

                                <Card.Body>
                                    <Card.Title>{movier.movie}</Card.Title>
                                    <Card.Text>
                                        {
                                            movier.comment
                                        }
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handleDelete(movier.id)}>delete</Button>

                                   

                                     <Form onSubmit={updteFavHandler(movier.id)}> 
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Comment</Form.Label>
                                            <Form.Control ref={commentRef} type="text" placeholder="enter your comment" />
                                            <Form.Text className="text-muted">

                                            </Form.Text>
                                        </Form.Group>


                                        <Button variant="primary" type="submit" >
                                            update
                                        </Button>


                                       
                                    </Form>
                                     




                            </Card.Body>
                        </Card >
    </>
    )






})
}


</>

)


}