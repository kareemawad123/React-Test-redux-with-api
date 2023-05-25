import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosConfig/instance";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const [search, setSearch] = useState('');
    useEffect(() => {
        console.log(search);
    },[search])
    const handleSearch = (e)=>{
        setSearch(e.target.value);
        axiosInstance.get(`/search/movie?query=${e.target.value}`).then((res) => {
            // axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a29b764d285577543b22f1b2ee8f8ff5&page=2').then((res) => {
            console.log(res.data.results)
            setMovies(res.data.results);
            // console.log(movies[0].id);
            // getPoster(502356)
        })
        
    }

    useEffect(() => {
        axiosInstance.get(`/movie/popular?page=${page}`).then((res) => {
            // axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a29b764d285577543b22f1b2ee8f8ff5&page=2').then((res) => {
            console.log(res.data.results)
            setMovies(res.data.results);
            // console.log(movies[0].id);
            // getPoster(502356)
        })
    }, [page])


    return (
        <>
            <section style={{ backgroundColor: '#eee' }}>

                <label htmlFor='search'><h5>Search:</h5></label>
                <input type="text" value={search} name="searsh" onChange={(e) => { handleSearch(e) }} className="form-control" id="search" placeholder="Search" />

                <Row className="py-5">

                    {movies.map((movie, index) => {
                        return (

                            <Col lg={3} md={8} xl={3} className="mb-2" key={index}>
                                <div>
                                    <div className="card text-black">
                                        <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
                                            className="card-img-top" alt="Mivie" />
                                        <div className="card-body">
                                            <div className="text-center">
                                                <h5 className="card-title">{movie.title}</h5>
                                                <p className="text-muted mb-4">Rate: {movie.vote_average}</p>
                                            </div>
                                            <div>
                                                <div className="d-flex justify-content-between">
                                                    <span>Release date: </span><span>{movie.release_date}</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span>Vote count:</span><span>{movie.vote_count}</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span>Original language</span><span>{movie.original_language}</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-around total font-weight-bold mt-4">
                                                <NavLink to={`/details/${movie.id}`}>
                                                    <button className="btn btn-success" onClick={() => {
                                                        // console.log(movie.id);
                                                    }}>Details</button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}

                    <Col className="text-center mt-5">
                        <span className="m-2">
                            <button className={`btn btn-success ${(page < movies.length) ? '' : 'disabled'}`} onClick={() => {
                                // console.log(movies.length);
                                setPage(page + 1)
                            }}>Next</button>
                        </span>
                        <span className="ms-5 mx-5">
                            <b>
                                {page}
                            </b>
                        </span>
                        <span className="m-2">
                            <button className={`btn btn-success ${(page === 1) ? 'disabled' : ''}`} onClick={() => {
                                setPage(page - 1)
                            }}>Previous</button>
                        </span>
                    </Col>
                </Row>
            </section>


        </>
    )
}

export default Movies;

