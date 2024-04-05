"use client";
import { useState, useEffect } from "react";
import "../../style.css";
import Link from "next/link";
export default function Page(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    getProductDetail();
    console.log(props.params.editproduct);
  }, []);
  const getProductDetail = async () => {
    let productId = props.params.editproduct;
    let productData = await fetch(
      "http://localhost:3000/api/products/" + productId
    );
    productData = await productData.json();
    if (productData.success) {
      let result = productData.result;
      setName(result.name);
      setPrice(result.price);
      setColor(result.color);
      setCategory(result.category);
      setCompany(result.company);
    }
    console.log(productData);
  };
  const updateProduct = async () => {
    let productId = props.params.editproduct;
    let data = await fetch("http://localhost:3000/api/products/" + productId, {
      method: "PUT",
      body: JSON.stringify({ name, price, color, category, company }),
    });
    data = await data.json();
    if (data.result) {
      alert("Product has been updated");
    }
  };
  return (
    <div>
      <h1>Update product</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter product name"
        className="input"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter product price"
        className="input"
      />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter product color"
        className="input"
      />
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter product company"
        className="input"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter product category"
        className="input"
      />
      <Link href={"/products"}>Go to Products page</Link>
      <button className="btn" onClick={updateProduct}>
        Update Product
      </button>
    </div>
  );
}
