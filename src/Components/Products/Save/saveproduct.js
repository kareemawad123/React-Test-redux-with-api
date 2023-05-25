import axios from "axios";
import axiosInstance from "../../../axiosConfig/instance";
import { useEffect } from "react";
import swal from 'sweetalert';




const SaveProduct = () => {

    useEffect(() => {
        var newProduct = {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }
        axiosInstance.post("", JSON.stringify(newProduct)).then((req)=>{
            console.log(req);
            swal("Send Done", "Product Send Success", "success");
        }).catch((err)=>{
            console.log(err);
        })
    })

    return (
        <>
            <div>
                <h1>Save Product</h1>
            </div>
        </>
    )
}

export default SaveProduct;