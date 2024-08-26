// "use client";
// import {useEffect,useState} from 'react'

// export default function Page(){
    
//         const [product ,setProduct]= useState([])
        
//         useEffect(async ()=>{
//         let data = await fetch("https://dummyjson.com/products ");
//         data = await data.json();
    
//         setProduct(data.products)
//     },[])

//     return(
//         <div>
//         <h1>product list</h1>
//         {
//             product.map((item) => (
//                 <h3>{item.title}</h3>
//             ))
//         }
//         </div>
//     )
// }











"use client";
import { useEffect, useState } from 'react';
import Product from "./product";

export default function Page() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            let data = await fetch("https://dummyjson.com/products");
            data = await data.json();
            setProduct(data.products);
        };

        fetchProducts();
    }, []); // Dependency array is empty, so it only runs once when the component mounts.

    return (
        <div>
            <h1>Product List</h1>
            {product.map((item) => (
                <div>
                <h3 key={item.id}>{item.title}</h3>
                {/* <button onClick={()=>alert("hello")}>Check Price</button> */}
                <Product price={item.price} />

                </div>
            ))}
        </div>
    );
}
