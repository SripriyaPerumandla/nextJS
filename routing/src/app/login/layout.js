'use client'
import Link from 'next/link';
import './login.css';
import {usePathname} from 'next/navigation';
export default function Layout({children}){
    const pathName=usePathname();
    return(
          <div>{
            pathName!=='/login/loginteacher'?(
            <ul className='login-menu'>
                <li>
                    <h4>Login Menu</h4>
                </li>
                <li>
                    <Link href='/login'>Login Main</Link>
                </li>
                <li>
                    <Link href='/login/loginstudent'>Login Student</Link>
                </li>
                <li>
                    <Link href='/login/loginteacher'>Login Teacher</Link>
                </li>
            </ul>)
            :
            (<Link href="/login">Go to Main Login Page</Link>)
}
            {
                children
            }
          </div>
    )
}