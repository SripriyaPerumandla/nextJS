import '../style.css';
import Link from 'next/link';
import DeleteProduct from '@/lib/DeleteProduct';
const getProducts=async()=>{
    let data=await fetch('http://localhost:3000/api/products',{cache:"no-cache"});
    data=await data.json();
    if(data.success){
        return data.result;
    }
    else{
        return {success:false}
    }
}
export default async function Page(){
    const products =await getProducts();
    return(
        <div className='table-container'>
            <h1>Product List</h1>
            <table>
                <thead>
                    <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Color</td>
                    <td>Category</td>
                    <td>Company</td>
                    <td></td>
                    <td></td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item)=>(<tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.color}</td>
                        <td>{item.category}</td>
                        <td>{item.company}</td>
                        <td><Link href={'/products/'+item._id}>Edit</Link></td>
                        <td><DeleteProduct id={item._id}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}