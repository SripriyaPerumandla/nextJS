import getUsers from '../../../../services/getUsers';
export default async function page(props){
    const getUsersList=getUsers();
    const users=await getUsersList;
    const currentId=props.params.userId;
    const userData=users[currentId-1];
    console.log(props.params.userId);
    return(
        <div><h3>User detail Page</h3>
        <h4>{userData.id}</h4>
        <h4>{userData.firstName}</h4>
        <h4>{userData.email}</h4></div>
    )
}
export async function generateStaticParams(){
    const getUserList=getUsers();
    const users=await getUserList;
    return users.map(user=>({
        userId: user.id.toString()
    }))
}