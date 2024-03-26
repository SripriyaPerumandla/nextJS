import getUsers from '../../../services/getUsers';
import Link from 'next/link';
export default async function page(){
    const getUsersList=getUsers();
    const users=await getUsersList;
    console.log(users);
    return(
        <div>
            <h1>User List</h1>
            {users.map((item)=>(
            <h2 key={item.id}><Link href={`/users/${item.id}`}>{item.firstName}</Link></h2>
        ))}
        </div>
    )
}