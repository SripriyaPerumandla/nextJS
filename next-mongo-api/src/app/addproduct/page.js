'use client'
import { useState } from 'react';
import '../style.css';
export default function Page(){
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [color,setColor]=useState('');
    const [company,setCompany]=useState('');
    const [category,setCategory]=useState('');
    const addProduct=async()=>{
       console.log(name,price,color,company,category);
       let result=await fetch('http://localhost:3000/api/products',{
       method:'POST',
       body:JSON.stringify({name,price,color,company,category})
    });
    result=await result.json();
    if(result.success){
        alert('New Product added');
        setName('');
        setPrice('');
        setCategory('');
        setColor('');
        setCompany('');
    }
    }
    return(
        <div>
            <h1>Add Products</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter product name' className='input'/>
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter product price' className='input'/>
            <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder='Enter product color' className='input'/>
            <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Enter product company' className='input'/>
            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter product category' className='input'/>
            <button className='btn' onClick={addProduct}>Add Product</button>
        </div>
    )
}

//the below code with single state
// import React, { useState } from 'react';
// import '../style.css';

// export default function Page() {
//     const [productData, setProductData] = useState({
//         name: '',
//         price: '',
//         color: '',
//         company: '',
//         category: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProductData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const addProduct = async () => {
//         console.log(productData);
//         try {
//             const response = await fetch('http://localhost:3000/api/products', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(productData)
//             });
//             const result = await response.json();
//             if (result.success) {
//                 alert('New Product added');
//                 setProductData({
//                     name: '',
//                     price: '',
//                     color: '',
//                     company: '',
//                     category: ''
//                 });
//             } else {
//                 alert('Failed to add product');
//             }
//         } catch (error) {
//             console.error('Error adding product:', error);
//             alert('Error adding product. Please try again later.');
//         }
//     };

//     return (
//         <div>
//             <h1>Add Products</h1>
//             <input type="text" name="name" value={productData.name} onChange={handleChange} placeholder='Enter product name' className='input' />
//             <input type="text" name="price" value={productData.price} onChange={handleChange} placeholder='Enter product price' className='input' />
//             <input type="text" name="color" value={productData.color} onChange={handleChange} placeholder='Enter product color' className='input' />
//             <input type="text" name="company" value={productData.company} onChange={handleChange} placeholder='Enter product company' className='input' />
//             <input type="text" name="category" value={productData.category} onChange={handleChange} placeholder='Enter product category' className='input' />
//             <button className='btn' onClick={addProduct}>Add Product</button>
//         </div>
//     );
// }
