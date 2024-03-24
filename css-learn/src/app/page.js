'use client'
import {useState} from 'react';
import style from './conditionalstyle.module.css';
// import outside from'@/style/outside.module.css';
export default function Home() {
  //updating style using useState
  const [h3Style, setH3Style]=useState({background:'green'});
  const [color,setColor]=useState('green');
  return (
    <main> 
      <h1>Style and CSS with NextJs</h1>
      <h2>H2 tag on main page</h2>
      <h3 style={h3Style}>H3 tag on main page</h3>
      {/* <h4 className={outside.main}>Outside css H4 tag</h4> */}
      <h5 className={style.palevioletred}>Hey! h5 tag on main page.</h5>
      <h6 className={{backgroundColor:color=='red'?style.red:style.palevioletred}}>h6 tag on main page.</h6>
      <h6 className={color=='red'?style.red:style.palevioletred}>h6 tag on main page.</h6>
      <button onClick={()=>setH3Style({background:'red'})}>Update Style</button>
    </main>
  );
}
//global css files are imported in layout.js file.
