import {redirect} from 'next/navigation'
export default function page(){
    redirect('/');
    return(
        <div>
            <h1>Admin page</h1>
        </div>
    )
}