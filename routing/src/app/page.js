'use client'
import Link from 'next/link';
import {useRouter} from 'next/navigation'; //importing useRouter hook
export default function Home() {
  const router=useRouter(); //creating router instance
  const navigate=(name)=>{
    router.push(name)
  }
  return (
    <main>
     <h1>Basic Routing</h1>
     <br/>
     <Link href='/login'>LOGIN PAGE</Link>
     <br/>
     <Link href='/about'>ABOUT PAGE</Link>
     <br/>
     <br/>
     <button onClick={()=>navigate('/login')}>Go to Login Page</button> 
     <br/>
     <button onClick={()=>navigate('/about')}>Go to About Page</button> 
    </main>
  );
}
