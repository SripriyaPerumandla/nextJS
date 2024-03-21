import Link from 'next/link';
const About=()=>{
    return(
        <div>
            <h1>About Page</h1>
            <Link href='/'>HOME PAGE</Link>
            <br/>
            <Link href='/about/aboutstudent'>Go to About Student page</Link>
            <br/><br/>
            <Link href='/about/aboutcollege'>Go to About College page</Link>
        </div>
    )
}
export default About;