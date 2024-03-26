async function userList(){
    let response=await fetch('https://dummyjson.com/users');
    let data= await response.json();
    return data.users;
}
export default async function page(){
    let users=await userList();
    console.log(users)
    return(
        <div>
        <h1>Loader comp</h1>
        {users.map((item)=>(
            <div><h2>{item.firstName}</h2></div>
        ))}</div>
    )
}
//to use cdn in specific files