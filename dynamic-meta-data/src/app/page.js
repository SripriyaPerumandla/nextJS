import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      Dynamic meta data
    </main>
  );
}
//function name needs to be generateMetadata
//it is useful in SEO
//we can use title instead of generateMetadata but it creates complications by creating 
//2 titles and 2 descriptions.
