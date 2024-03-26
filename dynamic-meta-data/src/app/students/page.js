export default function student(){
    return(
        <div>
            <h1>Student Comp</h1>
        </div>
    )
}
export function generateMetadata({params}){
    return{
        title:"Student page title!",
        description:"Student page description."
    }
}
