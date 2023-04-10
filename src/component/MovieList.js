import SingleMovie from "./SingleMovie"


export default function MovieList(props) {


    return (
        <>
            {
                props.movies.map(movie => {
                    return (
                        <>
                            <SingleMovie movie={movie}    commentHandler={props.commentHandler}/>

                            

                        </>
                    )
                })

            }
        </>
    )



}