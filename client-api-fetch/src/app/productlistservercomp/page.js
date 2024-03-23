import Product from "./product";
async function productList(){
    let response=await fetch('https://dummyjson.com/products');
    let data=await response.json();
    return data.products;
}
export default async function Page(){
    let products=await productList();
    return(
        <div>
        <h1>Product List in Server Component</h1>
        { 
           products.map((item)=>(
           <div>
            <h3>Name:{item.title}</h3>
            <Product price={item.price}/>
           </div>
        ))
        }
        </div>
    )
}