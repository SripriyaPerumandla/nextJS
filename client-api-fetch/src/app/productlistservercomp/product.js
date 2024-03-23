'use client'
export default function Product(props){
    return(
        <div>
            <button onClick={()=>alert(props.price)}>Check Price!</button>
        </div>
    )
}