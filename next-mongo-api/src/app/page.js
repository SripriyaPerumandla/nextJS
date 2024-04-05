'use client'
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [file,setFile]=useState()
  const onSubmit=async(e)=>{
    e.preventDefault();
    console.log(file);
    const data=new FormData();
    data.set('file',file);
    let result=await fetch('http://localhost:3000/api/upload/',{
      method:'POST',
      body:data
    });
    result=await result.json();
    console.log(result);
    if(result.success){
      alert('File uploaded successfully!')
    }
  }
  return (
    <main>
      <Link href='/addproduct'>Add Product Page</Link><br/>
      <Link href='/products'>Product List Page</Link>
      <h1>Upload Image</h1>
      <form onSubmit={onSubmit}>
        <input type='file' name='file' onChange={(e)=>setFile(e.target.files?.[0])}/>
        <button type='submit'>Upload Image</button>
      </form>
    </main>
  );
}
