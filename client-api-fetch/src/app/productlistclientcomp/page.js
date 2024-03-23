'use client'
import { useState, useEffect } from 'react';

export default function Page() {
    const [products, setProducts] = useState([]);

    // Defining async funtion to fetch the date from the API
    const fetchData = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProducts(data.products); // Update state with fetched products
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Use useEffect to call fetchData on component mount
    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array to run only on mount

    return (
        <div>
            <h1>Product List</h1>
            {products.map((product) => (
                <h3 key={product.id}>Title:{product.title}, Price:{product.price}</h3>
            ))}
        </div>
    );
}
