export default function user(){
    return(
        <div>
            <h1>User Comp</h1>
        </div>
    )
}
export function generateMetadata({params}){
    return{
        title:"User page title!",
        description:"User page description."
    }
}