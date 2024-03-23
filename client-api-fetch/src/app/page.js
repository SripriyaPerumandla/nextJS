'use client'
import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <div>
        <h1>Fetch Data with API in Client Component</h1>
        <Link href='/productlistclientcomp'>Go to Product List in Client Component</Link>
        <br/>
        <Link href='/productlistservercomp'>Go to Product List in Server Component</Link>
      </div>
    </main>
  );
}
