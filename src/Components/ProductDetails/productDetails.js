import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const ProductDetails = () => {
    const params = useParams();
    console.log(params.id);

    const [product, setProduct] = useState({});

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${params.id}`).then((res) => {
            setProduct(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    return (
        <>
            <div>
                <h2>Product {params.id}</h2>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <img width={100} src={product.image}/>
            </div>
        </>
    )
}

export default ProductDetails;