import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosConfig/instance";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import changeMovies from "../../../store/actions/movies";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import './movies.css'
import changeFavorite from "../../../store/actions/favorite";


const Movies = () => {

    // const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const movies = useSelector((state) => state.movies.movies);
    const [search, setSearch] = useState('');

    const favorite = useSelector((state) => state.favorites.favorite);

    const dispatch = useDispatch();

    console.log(movies);

    useEffect(() => {
        console.log(search);
    }, [search])

    const handleSearch = (e) => {
        setSearch(e.target.value);
        if (e.target.value == null || e.target.value == '') {
            dispatch(changeMovies(`/movie/popular?page=${page}`));
        } else {
            dispatch(changeMovies(`/search/movie?query=${e.target.value}`));
        }

    }

    useEffect(() => {
        dispatch(changeMovies(`/movie/popular?page=${page}`));
    }, [page])

    useEffect(() => {
        console.log(favorite);
        
    }, [favorite])

    const handleFavorite = (movie) =>{
        // let index = favorite.indexOf(movie);
        // console.log(index);
        dispatch(changeFavorite(movie))
    }

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
                                        <div className="image-movie">
                                            <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
                                                className="card-img-top" alt="Mivie" />
                                            <button className="btn favorite" onClick={()=>{handleFavorite(movie)}}>
                                                {
                                                    
                                                    (!favorite.find((mov)=>{
                                                        return mov.id == movie.id;
                                                    })) ? <MdFavoriteBorder /> : <MdFavorite />
                                                }
                                                
                                            </button>
                                        </div>
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

