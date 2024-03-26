import Profile from '../../public/vercel.svg';
import {Roboto} from 'next/font/google';
import Image from "next/image";
const roboto=Roboto({
  weight:'100',
  subsets:['latin'],
  display:'swap'
})
export default function Home() {
  return (
    <main>
      <h1>Image Optimization in Next</h1>
      <Image src={Profile} width={200} height={200}/><br/>
      <Image src='https://www.floralwallpaper.co.uk/wp-content/uploads/sites/15/2022/11/wallpaper-of-opened-lotus-flower.jpg'
      width={200} height={200} quality={98}/>
      <h2 className={roboto.className}>Font with Next.js font feature</h2>
    </main>
  );
}
//if I try to use html image tag <img src={Profile}/>, it doesn't work here.
//<img src={Profile.src}/> works

//if using image from other domains(http link), you need to configure it in next.config.js
//images: { domains:['upload.wikimedia.org'] }