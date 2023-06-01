import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../../axiosConfig/instance";

export default function Products() {
    // const navigate = useNavigate();
    // const goToNavigateProducts = () => {
    //     navigate('/signup');
    // }
    // const goBackNavigate = () => {
    //     navigate(1);
    // }

    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     axiosInstance.get('').then((response) => {
    //     // axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a29b764d285577543b22f1b2ee8f8ff5').then((response) => {
    //         console.log(response.data[0].title); 
    //         setProducts(response.data); 
    //     }).catch((error) => {
    //         console.log("Error: " + error);
    //     })
    // }, [])



    return (
        <div>
            {/* <h2>{products.title}</h2> */}
            {/* {products.map((prd) => {
                return (
                    <div key={prd.id}>
                        <NavLink to={`/details/${prd.id}`}>
                            <h2>{prd.title}</h2>
                        </NavLink>
                    </div>)
            })} */}
            {/* <h1>{products[0].title}</h1> */}

            {/* <h1>Products</h1>
            <div>
                <button className="btn btn-success mx-1" onClick={() => { goToNavigateProducts() }}>Go To Sign Up</button>
                <button className="btn btn-danger mx-1" onClick={() => { goBackNavigate() }}>Go Back</button>
            </div>
            <div>
                <Link to='/products/save' className="btn btn-warning m-1 ">Save</Link>
                <Link to='/products/edit' className="btn btn-secondary  m-1">Edit</Link>
            </div> */}


            <Outlet />
        </div>
    )
}