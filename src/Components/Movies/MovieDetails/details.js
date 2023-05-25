import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../axiosConfig/instance";
import { Col, Row } from "react-bootstrap";


const MovieDetails = () => {
    const params = useParams();
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([])

    useEffect(() => {
        axiosInstance.get(`/movie/${params.id}`).then((res) => {
            console.log(res.data)
            setMovie(res.data);
            setGenres(res.data.genres);
        })
    }, [])


    return (
        <section style={{ backgroundColor: "#eee" }}>
            <div className="container py-5">
                <div className="row justify-content-center mb-3">
                    <div className="col-md-12 col-xl-10">
                        <div className="card shadow-0 border rounded-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                        <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                            <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
                                                className="w-100" alt="Mivie" />
                                            <a href="#!">
                                                <div className="hover-overlay">
                                                    <div className="mask" style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <h5>Quant trident shirts</h5>
                                        <div className="d-flex flex-row">
                                            <div className="text-danger mb-1 me-2">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <span>310</span>
                                        </div>

                                        <div className="mt-1 mb-2 text-muted small">
                                            {genres.map((g) => {
                                                return<span key={g.id}>
                                                        <span>{g.name}</span>
                                                        <span className="text-primary"> • </span>
                                                    </span>    
                                            })}

                                        </div>

                                        <Row>
                                            <Col>Time: {movie.runtime}m</Col>
                                            <Col>Rate: {movie.vote_average}</Col>
                                            <Col>Vote count: {movie.vote_count}</Col>
                                        </Row>

                                        <h5>
                                            overview:
                                        </h5>
                                        <p className=" mb-4 mb-md-0">
                                            {movie.overview}
                                        </p>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                        <div className="d-flex flex-row align-items-center mb-1">
                                            <h4 className="mb-1 me-1">$13.99</h4>
                                            <span className="text-danger"><s>$20.99</s></span>
                                        </div>
                                        <h6 className="text-success">Free shipping</h6>
                                        <div className="d-flex flex-column mt-4">
                                            <button className="btn btn-primary btn-sm" type="button">Details</button>
                                            <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                                                Add to wishlist
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieDetails;