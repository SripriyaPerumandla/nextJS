'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {useState} from 'react';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>HOME PAGE</h1>
      <User name='Sripriya'/>
      <Events/>
    </main>
  );
}

const User=(props)=>{
  return(
    <div>
      <h2>My name is {props.name}</h2>

    </div>
  )
}
 const Events=()=>{
  let [name,setName]=useState('Priya');
  return(
  <main className={styles.main}>
    <h1>Events, function and state {name}</h1>
    <button onClick={()=>alert('Hello NextJs')}>Click Me!</button>
    <button onClick={()=>setName('Sripriya')}>Click Me to Change Name!</button>
  </main>
  )
 }